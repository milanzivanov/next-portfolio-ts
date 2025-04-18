import { fetchProjects } from "@/utils/actions";
import ProjectsList from "./ProjectsList";
import EmptyList from "./EmptyList";
import type { ProjectCardProps } from "@/utils/types";

export default async function ProjectsContainer({
  category,
  search
}: {
  category?: string;
  search?: string;
}) {
  const projects: ProjectCardProps[] = await fetchProjects({
    category,
    search
  });

  if (projects.length === 0)
    return (
      <EmptyList
        heading="No projects found"
        message="Try changing the filters"
        btnText="Back to portfolio"
      />
    );

  return <ProjectsList projects={projects} />;
}
