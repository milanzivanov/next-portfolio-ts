import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function PorfolioPage() {
  interface Project {
    id: string;
    name: string;
    description: string;
  }

  const projects: Project[] = await prisma.project.findMany();
  // console.log("///////// ", projects);

  return (
    <section className="h-[calc(100dvh-101px)] bg-slate-50 dark:bg-slate-800 py-5">
      <div className="container">
        <h1 className="text-3xl">Portfolio page</h1>
        <ul>
          {projects.map((p) => (
            <li key={p.id} className="text-2xl">
              {p.name}
              <br />
              {p.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
