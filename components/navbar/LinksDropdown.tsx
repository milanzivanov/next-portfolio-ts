import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function LinksDropdown() {
  const publicLinks = links.filter(
    (link) => link.href !== "/projects" && link.href !== "/projects/create"
  );

  const protectedLinks = links.filter(
    (link) => link.href === "/projects" || link.href === "/projects/create"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[200px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-32" align="start" sideOffset={10}>
        {/* Public Links - visible to everyone */}
        {publicLinks.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="capitalize w-full">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}

        {/* Dashboard Link - only for signed in users for now just for me */}
        <SignedIn>
          {protectedLinks.length > 0 &&
            protectedLinks.map((link) => (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="capitalize w-full">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}

          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>

        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
