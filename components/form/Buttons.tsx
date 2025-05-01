"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

import { LuTrash2 } from "react-icons/lu";
import { FaEdit, FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

type actionType = "edit" | "delete" | "back";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg"
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={className} disabled={pending} size={size}>
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

//
type IconButtonProps = {
  actionType: actionType;
  href?: string;
  className?: string;
  size?: btnSize;
  text?: string;
};

export const IconButton = ({ actionType, href = "/" }: IconButtonProps) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <FaEdit />;
      case "delete":
        return <LuTrash2 />;
      case "back":
        return <FaArrowCircleLeft />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  if (actionType === "back") {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 p-2 cursor-pointer text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {renderIcon()}
        <span className="text-sm font-medium">Back home</span>
      </Link>
    );
  }

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};
