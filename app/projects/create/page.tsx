import FormInput from "@/components/form/FormInput";
import FormContainer from "@/app/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";

const createProjectAction = async (prevState: unknown, formData: FormData) => {
  "use server";
  const projectTitle = formData.get("projectTitle") as string;

  if (projectTitle !== "sakeAndBake")
    return { message: "Project title is not valid" };

  console.log("project name", projectTitle);
  return { message: "Project created successfully" };
};

export default function CreateProjectPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">New project</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProjectAction}>
          <div className="grid gap-4 mb-4">
            <FormInput
              type="text"
              name="projectTitle"
              label="Project Title"
              placeholder="Enter project title"
            />
          </div>
          <SubmitButton className="mt-4" text="Create Project" />
        </FormContainer>
      </div>
    </section>
  );
}
