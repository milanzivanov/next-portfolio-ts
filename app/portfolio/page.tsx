import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function PorfolioPage() {
  const projects = await prisma.project.findMany();
  // console.log("///////// ", projects);

  return (
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
  );
}
