import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/portfolio/CategoriesList";
import ProjectsContainer from "@/components/portfolio/ProjectsContainer";
import { Suspense } from "react";

export default async function PorfolioPage(props: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const searchParams = await props.searchParams;
  const awaitedSearchParams = await Promise.resolve(searchParams);

  const { category, search } = awaitedSearchParams;

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
