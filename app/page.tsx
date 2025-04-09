import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  // console.log("///////// ", user);

  return (
    <main className="flex py-2">
      <h1 className="text-3xl font-bold">
        Welcome {user?.firstName} to my new next portfolio app!
      </h1>
    </main>
  );
}
