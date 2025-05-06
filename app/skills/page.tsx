import { technologies } from "@/utils/technologies";

import SkillsCard from "@/components/skill/SkillsCard";
import { IconButton } from "@/components/form/Buttons";

export const metadata = {
  title: "Skills page"
};

export default function SkillsPage() {
  const skills = technologies;

  return (
    <section className="w-full">
      <div className="w-full md:h-[calc(100dvh-101px)] flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
            <div className="flex flex-col bg-white pt-5 pb-10 px-5 md:mt-5 shadow-md xl:rounded-md">
              <h1 className="text-2xl tracking-wider md:text-3xl mb-1 text-gray-600 font-bold">
                Technologies
              </h1>

              <p className="pb-5 text-grey-200 dark:text-slate-800 text-base 2xl:text-lg max-w-5xl">
                Here is a detailed list of the tech tools I regularly use in my
                work. My primary focus revolves around{" "}
                <span className="font-semibold tracking-wider text-blue-500 dark:text-blue-700">
                  React
                </span>{" "}
                and
                <span className="font-semibold tracking-wider text-blue-500 dark:text-blue-700">
                  {" "}
                  Next.js
                </span>
                , which are at the core of most of my projects. These tools help
                me build dynamic and efficient web applications, making them an
                essential part of my development process.
              </p>

              <SkillsCard skills={skills} />
            </div>
            {/* BTH */}
            <div className="flex justify-center px-5 xl:px-0 md:justify-end">
              <div className="flex w-full md:px-5 xl:px-0 justify-end my-5">
                <IconButton actionType="back" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
