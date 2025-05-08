import { redirect } from "next/navigation";
import BreadCrumbs from "@/components/portfolio/BreadCrumbs";
import Description from "@/components/portfolio/Description";
import ImageContainer from "@/components/portfolio/ImageContainer";
import { fetchProjectDetails } from "@/utils/actions";
import Link from "next/link";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const project = await fetchProjectDetails(resolvedParams.id);
  if (!project) throw new Error("Project not found");
  const { name } = project;
  return {
    title: name
  };
}

export default async function ProjectDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;
  const project = await fetchProjectDetails(id);

  if (!project) return redirect("/");

  const { name, image, link } = project;

  return (
    <div className="h-[calc(100dvh-100px)] py-5">
      <section className="container">
        <BreadCrumbs name={name} />
        <header className="flex justify-between items-center mt-4">
          <h2 className="flex items-center text-md md:text-2xl font-bold">
            <span className="mr-2">{name}</span>
            <Link
              className="text-sm font-medium"
              href={link || ""}
              target="_blank"
            >
              (view project)
            </Link>
          </h2>
        </header>

        <section className="lg:grid lg:grid-cols-12 gap-x-4 bg-slate-50 dark:bg-slate-700 rounded-md overflow-hidden">
          <div className="lg:col-span-7">
            <ImageContainer mainImage={image || ""} name={name} />
          </div>
          <div className="lg:col-span-5 flex flex-col items-center p-5 md:p-0">
            <Description description={project.description} />
          </div>
        </section>
      </section>
    </div>
  );
}
