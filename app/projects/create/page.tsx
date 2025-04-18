import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { SubmitButton } from "@/components/form/Buttons";

import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ImageInput from "@/components/form/ImageInput";
import TechnologiesInput from "@/components/form/TechnologiesInput";

import { createProjectAction } from "@/utils/actions";

export default function CreateProjectPage() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800">
      <div className="container">
        <h1 className="text-2xl font-semibold py-5 capitalize">
          Add new project
        </h1>
        <div className="border p-8 rounded-md">
          <FormContainer action={createProjectAction}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <FormInput
                type="text"
                name="name"
                label="Project name"
                placeholder="Enter project name"
              />

              <CategoriesInput />
            </div>

            <TextAreaInput
              name="description"
              labelText="Description (10 - 1000 Words)"
            />

            <div className="grid sm:grid-cols-2 gap-8 mt-4">
              <ImageInput />
            </div>
            <h3 className="text-lg  my-6 font-medium">Technologies</h3>
            <TechnologiesInput />
            <SubmitButton className="mt-12" text="Create project" />
          </FormContainer>
        </div>
      </div>
    </section>
  );
}
