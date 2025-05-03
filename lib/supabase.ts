import { createClient } from "@supabase/supabase-js";

const bucket = "portfolio-bucket";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (fileImage: File) => {
  const timestamp = Date.now();
  const fileName = `${timestamp}-${fileImage.name}`;

  const { data } = await supabase.storage
    .from(bucket)
    .upload(fileName, fileImage, {
      cacheControl: "3600",
      upsert: false
    });

  if (!data) {
    throw new Error("Failed to upload image");
  }

  // return supabase.storage.from(bucket).getPublicUrl(fileName);
  return fileName;
};
