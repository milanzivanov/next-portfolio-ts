import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/utils/types";

export default function ProjectCard({
  project
}: {
  project: ProjectCardProps;
}) {
  const { id: projectId, name, image } = project;

  return (
    <article className="group relative bg-slate-200 dark:bg-slate-700 rounded-md shadow-sm p-2">
      <Link href={`/portfolio/${projectId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={
              image
                ? `https://zikdvdnrvqdvrrhvwjau.supabase.co/storage/v1/object/public/portfolio-bucket/${image}`
                : ""
            }
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm md:text-lg font-semibold">
            {name.substring(0, 30)}
          </h3>
        </div>
      </Link>
    </article>
  );
}
