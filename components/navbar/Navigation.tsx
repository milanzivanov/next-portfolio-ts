"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
// import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navigation() {
  const pathname = usePathname();
  // const isActive = (href: string) => {
  //   return pathname === href;
  // };
  // shorter
  const isActive = (href: string) => pathname === href;

  const publicLinks = links.filter(
    (link) => link.href !== "/projects" && link.href !== "/projects/create"
  );

  const protectedLinks = links.filter(
    (link) => link.href === "/projects" || link.href === "/projects/create"
  );

  return (
    <nav className="flex items-center gap-2">
      {/* Public Links - visible to everyone */}
      {publicLinks.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <Button
            variant="ghost"
            className={cn(
              "capitalize text-md px-4 py-2 hover:bg-transparent hover:dark:bg-transparent hover:text-primary hover:dark:text-[#8ec5ff] cursor-pointer",
              isActive(link.href) ? "text-primary dark:text-[#8ec5ff]" : ""
            )}
          >
            {link.label}
          </Button>
        </Link>
      ))}

      {/* Protected Links - only for me */}
      <SignedIn>
        {protectedLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <Button
              variant="ghost"
              className={cn(
                "capitalize text-md px-4 py-2 hover:bg-transparent hover:dark:bg-transparent hover:text-primary hover:dark:text-[#8ec5ff] cursor-pointer",
                isActive(link.href) ? "text-primary dark:text-[#8ec5ff]" : ""
              )}
            >
              {link.label}
            </Button>
          </Link>
        ))}

        <SignOutLink />
      </SignedIn>

      {/* Sign In - shown only when logged out */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="ghost"
            className="text-md px-4 py-2 hover:bg-transparent hover:dark:bg-transparent hover:text-primary hover:dark:text-[#8ec5ff] cursor-pointer"
          >
            <span>Login</span>
          </Button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
