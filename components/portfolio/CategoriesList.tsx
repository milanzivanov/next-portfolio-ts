import { categories } from "@/utils/categories";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Link from "next/link";

export default function CategoriesList({
  category,
  search
}: {
  category?: string;
  search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <section>
      <ScrollArea className="py-2">
        <div className="flex pt-4">
          {categories.map((item) => {
            const isActive = item.label === category;
            return (
              <Link
                key={item.label}
                href={`portfolio/?category=${item.label}${searchTerm}`}
              >
                <article
                  className={`flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  <item.icon className="w-6 h-6 " />
                  <p className="capitalize text-sm mt-1">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
