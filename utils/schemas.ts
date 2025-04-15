import { z } from "zod";
import { ZodSchema } from "zod";

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile()
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export const projectSchema = z.object({
  // projectName: z.string().min(2, "Project name is required"),
  name: z
    .string()
    .min(2, {
      message: "Project name is required and must be at least 2 characters long"
    })
    .max(50, {
      message: "Project name must be less than 50 characters long"
    }),

  category: z.string(),

  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words."
    }
  ),
  technologies: z.string()
});
