import { ProjectCardProps } from "@/utils/types";

import ProjectCard from "../card/ProjectCard";

export default function ProjectsList({
  projects
}: {
  projects: ProjectCardProps[];
}) {
  return (
    <section className="my-4 gap-8 grid sm:grid-cols-2  xl:grid-cols-3  2xl:grid-cols-4">
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </section>
  );
}
