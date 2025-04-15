"use client";

import { useEffect, useActionState as useFormState } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initalState = {
  message: ""
};

export default function FormContainer({
  action,
  children
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initalState);
  // console.log("/////////////// toast", toast);
  // console.log("/////////////// state", state);
  // console.log("/////////////// formAction", formAction);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
