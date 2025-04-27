"use client";
import { useState } from "react";
import { technologies, Technology } from "@/utils/technologies";
import { Checkbox } from "@/components/ui/checkbox";

function TechnologiesInput({ defaultValue }: { defaultValue?: Technology[] }) {
  const technologiesWithIcons = defaultValue?.map(({ name, selected }) => {
    return {
      name,
      selected,
      icon: technologies.find((tech) => tech.name === name)!.icon
    };
  });

  const [selectedTecnology, setSelectedTecnology] = useState<Technology[]>(
    technologiesWithIcons || technologies
  );

  const handleChange = (technology: Technology) => {
    setSelectedTecnology((prev) => {
      return prev.map((t) => {
        if (t.name === technology.name) {
          return { ...t, selected: !t.selected };
        }
        return t;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="technologies"
        value={JSON.stringify(selectedTecnology)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedTecnology.map((techology) => (
          <div key={techology.name} className="flex items-center space-x-2">
            <Checkbox
              id={techology.name}
              checked={techology.selected}
              onCheckedChange={() => handleChange(techology)}
            />
            <label
              htmlFor={techology.name}
              className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
            >
              {techology.name}
              <techology.icon className="w-4 h-4" />
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TechnologiesInput;
