import { Technology } from "@/utils/technologies";

export default function SkillsCard({ skills }: { skills: Technology[] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-8 2xl:grid-cols-7 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-slate-200 dark:bg-slate-800 text-grey-200 rounded-md shadow-md py-3 px-0 2xl:py-5 2xl:px-3 cursor-not-allowed"
        >
          <div className="flex flex-row items-center justify-center">
            <h5 className="text-xs pr-2 capitalize">{skill.name}</h5>

            <skill.icon className="w-4 h-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
