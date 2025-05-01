import { redirect } from "next/navigation";
import BreadCrumbs from "@/components/portfolio/BreadCrumbs";
import Description from "@/components/portfolio/Description";
import ImageContainer from "@/components/portfolio/ImageContainer";
import { fetchProjectDetails } from "@/utils/actions";
import Link from "next/link";

export default async function ProjectDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;
  const project = await fetchProjectDetails(id);

  if (!project) return redirect("/");

  const { name, image, link } = project;

  return (
    <div className="h-[calc(100dvh-101px)] bg-slate-50 dark:bg-slate-800 py-5">
      <section className="container">
        <BreadCrumbs name={name} />
        <header className="flex justify-between items-center mt-4">
          <h2 className="flex items-center text-md md:text-3xl font-bold">
            <span className="mr-2">{name}</span>
            <Link className="text-sm" href={link || ""} target="_blank">
              (View project)
            </Link>
          </h2>
        </header>

        <section className="lg:grid lg:grid-cols-12 gap-x-12">
          <div className="lg:col-span-8">
            <ImageContainer mainImage={image || ""} name={name} />
          </div>
          <div className="lg:col-span-4 flex flex-col items-center">
            <Description description={project.description} />
          </div>
        </section>
      </section>
    </div>
  );
}
