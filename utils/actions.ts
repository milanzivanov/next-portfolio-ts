"use server";

import { prisma } from "@/utils/db";

import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, projectSchema, validateWithZodSchema } from "./schemas";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/supabase";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred"
  };
};

//
const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

//
export const createProjectAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFields = validateWithZodSchema(projectSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, {
      image: file
    });
    const fullPath = await uploadImage(validatedFile.image);

    // crate project
    await prisma.project.create({
      data: {
        ...validatedFields,
        image: fullPath.data.publicUrl,
        createdBy: user.id
      }
    });
  } catch (error) {
    return renderError(error);
  }

  return redirect("/portfolio");
};

//
export const fetchProjects = async ({
  search = "",
  category
}: {
  search?: string;
  category?: string;
}) => {
  const projects = await prisma.project.findMany({
    where: {
      category,
      OR: [{ name: { contains: search, mode: "insensitive" } }]
    },
    select: {
      id: true,
      name: true,
      image: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return projects;
};

//
export const fetchProjectDetails = async (id: string) => {
  const project = await prisma.project.findUnique({
    where: {
      id
    }
    // include: {
    //   profile: true
    // }
  });
  return project;
};
