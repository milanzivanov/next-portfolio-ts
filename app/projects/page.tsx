import EmptyList from "@/components/portfolio/EmptyList";
// import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { fetchProjects, deleteProjectAction } from "@/utils/actions";
import Image from "next/image";

export default async function ProjectDashboard() {
  const projects = await fetchProjects({});

  if (projects.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className="h-[calc(100dvh-68px)] md:h-[calc(100dvh-101px)] bg-slate-100 dark:bg-slate-800 py-5">
      <div className="container">
        <div className="mt-3">
          <h4 className="mb-4 font-semibold text-2xl">
            Total projects: {projects.length}
          </h4>
          <Table className="w-full text-sm md:text-base">
            <TableCaption>A list of projects</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Project name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => {
                const { id, name, image } = project;

                return (
                  <TableRow key={id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Image
                          src={image || ""}
                          width={75}
                          height={75}
                          alt={name}
                          className="object-cover rounded-md"
                        />
                        <span className="font-medium">{name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DeleteProject projectId={id} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

function DeleteProject({ projectId }: { projectId: string }) {
  const deleteBooking = deleteProjectAction.bind(null, {
    projectId: projectId
  });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
