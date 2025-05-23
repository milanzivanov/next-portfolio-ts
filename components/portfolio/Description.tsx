"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";
const Description = ({ description }: { description: string }) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className="mt-2">
      <Title text="Project info" />
      <p className="text-slate-800 dark:text-gray-200 font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toggleDescription}>
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
};

export default Description;
