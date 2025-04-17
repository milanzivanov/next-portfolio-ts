export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type ProjectCardProps = {
  id: string;
  name: string;
  image: string | null;
};
