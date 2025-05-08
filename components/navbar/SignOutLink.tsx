"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

function SignOutLink() {
  const handleLogout = () => {
    toast("You have been signed out.");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button
        className="w-full text-left cursor-pointer hover:bg-transparent hover:dark:bg-transparent hover:text-primary hover:dark:text-[#0071bc]"
        onClick={handleLogout}
      >
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
