"use server";

import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, projectSchema, validateWithZodSchema } from "./schemas";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/supabase";

import { prisma } from "@/utils/db";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred"
  };
};

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
