import {
  fetchProjectDetails,
  updateProjectAction,
  updateProjectImageAction
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";

import { SubmitButton } from "@/components/form/Buttons";
import { redirect } from "next/navigation";
import ImageInputContainer from "@/components/form/ImageInputContainer";

import CategoriesInput from "@/components/form/CategoriesInput";
import TechnologiesInput from "@/components/form/TechnologiesInput";
import { Technology } from "@/utils/technologies";

export default async function EditProjectPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await fetchProjectDetails(id);

  if (!project) redirect("/portfolio");

  const defaultTechnologies: Technology[] = JSON.parse(project.technologies);

  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <div className="container py-5">
        <h1 className="text-2xl font-semibold mb-8 capitalize">
          Edit Property
        </h1>

        <div className="border p-8 rounded-md">
          <ImageInputContainer
            image={project.image || ""}
            name={project.name}
            action={updateProjectImageAction}
            text="Change image"
          >
            <input type="hidden" name="id" value={project.id} />
          </ImageInputContainer>

          <FormContainer action={updateProjectAction}>
            <input type="hidden" name="id" value={project.id} />
            <div className="grid md:grid-cols-3 gap-8 mb-4 mt-8">
              <FormInput
                name="name"
                type="text"
                label="Name (20 limit)"
                defaultValue={project.name}
              />
              <FormInput
                name="link"
                type="text"
                label="Project link"
                defaultValue={project.link || ""}
              />

              <CategoriesInput defaultValue={project.category} />
            </div>

            <TextAreaInput
              name="description"
              labelText="Project info (10 - 100 Words)"
              defaultValue={project.description}
            />

            <h3 className="text-lg my-6 font-medium">Technologies</h3>
            <TechnologiesInput defaultValue={defaultTechnologies} />

            <div className="flex justify-end">
              <SubmitButton text="Edit project" className="mt-12" />
            </div>
          </FormContainer>
        </div>
      </div>
    </section>
  );
}
