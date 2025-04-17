import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/portfolio/CategoriesList";
import ProjectsContainer from "@/components/portfolio/ProjectsContainer";
import { Suspense } from "react";

type Props = {
  searchParams: {
    category?: string;
    search?: string;
  };
};
export default async function PorfolioPage({ searchParams }: Props) {
  const search = searchParams?.search;
  const category = searchParams?.category;

  return (
    <section className="h-[calc(100dvh-101px)] bg-slate-50 dark:bg-slate-800 py-5">
      <div className="container">
        <CategoriesList category={category} search={search} />
        <Suspense fallback={<LoadingCards />}>
          <ProjectsContainer category={category} search={search} />
        </Suspense>
      </div>
    </section>
  );
}
