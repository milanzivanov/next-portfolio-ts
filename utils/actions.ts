"use server";

import { prisma } from "@/utils/db";

import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, projectSchema, validateWithZodSchema } from "./schemas";
import { redirect } from "next/navigation";
import { supabase, uploadImage } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

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
      image: true,
      link: true
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
  });
  return project;
};

//
export const deleteProjectAction = async ({
  projectId
}: {
  projectId: string;
}) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { image: true }
    });

    if (project?.image) {
      const { error } = await supabase.storage
        .from("portfolio-bucket")
        .remove([project.image]);

      if (error) {
        console.error("Error deleting image from Supabase:", error.message);
      }
    }

    // Delete the project from the database
    await prisma.project.delete({
      where: { id: projectId }
    });

    // Revalidate the portfolio page
    revalidatePath("/portfolio");
    return { message: "Project and associated image deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};

// edit project
export const updateProjectAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const projectId = formData.get("id") as string;

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(projectSchema, rawData);

    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        ...validatedFields
      }
    });

    revalidatePath(`/projects/${projectId}/edit`);

    return {
      message: "Project updated successfully"
    };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProjectImageAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const projectId = formData.get("id") as string;

  try {
    const image = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);

    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        image: fullPath.data.publicUrl
      }
    });

    revalidatePath(`/projects/${projectId}/edit`);

    return { message: "Project image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
