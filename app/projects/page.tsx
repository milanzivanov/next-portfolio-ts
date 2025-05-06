import { fetchProjects, deleteProjectAction } from "@/utils/actions";

import Link from "next/link";
import Image from "next/image";

import EmptyList from "@/components/portfolio/EmptyList";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { FaLink } from "react-icons/fa";

export default async function ProjectsDashboard() {
  const projects = await fetchProjects({});

  if (projects.length === 0) {
    return (
      <EmptyList
        heading="No projects in the list."
        message="Be free to create a project."
      />
    );
  }

  return (
    <section className="h-[calc(100dvh-68px)] md:h-[calc(100dvh-101px)] py-5">
      <div className="container">
        <div className="mt-3">
          <h4 className="mb-4 font-semibold text-2xl">
            Total projects: {projects.length}
          </h4>
          <Table className="w-full rounded-md bg-slate-50 dark:bg-slate-800 text-sm md:text-base">
            <TableCaption>A list of projects</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Project name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => {
                const { id, name, image, link } = project;

                return (
                  <TableRow key={id}>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Image
                          src={
                            image
                              ? `https://zikdvdnrvqdvrrhvwjau.supabase.co/storage/v1/object/public/portfolio-bucket/${image}`
                              : ""
                          }
                          width={100}
                          height={100}
                          alt={name}
                          className="hidden md:block h-auto w-auto object-cover rounded-md"
                        />
                        <Link
                          href={`/portfolio/${id}`}
                          className="underline text-muted-foreground tracking-wide"
                        >
                          <span className="font-medium">{name}</span>
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="flex items-center justify-end gap-x-1">
                      <Link
                        href={link || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground mr-3 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        <FaLink />
                      </Link>
                      <Link href={`/projects/${id}/edit`}>
                        <IconButton actionType="edit"></IconButton>
                      </Link>
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
