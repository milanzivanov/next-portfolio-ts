// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import db from "@/utils/db";

export default async function PorfolioPage() {
  // const profile = await prisma.profile.findMany();
  // console.log("///////// ", profile);

  console.log("/////////123 ", db.profile.findMany());

  return (
    <>
      <h1 className="text-3xl">Portfolio page</h1>
      {/* <ul>
        {profile.map((p) => (
          <li key={p.id} className="text-2xl">
            {p.name}
            <br />
            {p.description}
          </li>
        ))}
      </ul> */}
    </>
  );
}
