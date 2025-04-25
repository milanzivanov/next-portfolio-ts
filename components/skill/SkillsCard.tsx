import { Technology } from "@/utils/technologies";

export default function SkillsCard({ skills }: { skills: Technology[] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-8 2xl:grid-cols-7 gap-5">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-slate-200 dark:bg-slate-800 text-grey-200 rounded-md shadow-md py-5 px-0 2xl:py-5 2xl:px-3 flex justify-center items-center cursor-not-allowed"
        >
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-md 2xl:text-lg mb-1 capitalize">
              {skill.name}
            </h5>

            <skill.icon className="w-8 h-8" />
          </div>
        </div>
      ))}
    </div>
  );
}
