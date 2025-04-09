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
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function LinksDropdown() {
  const publicLinks = links.filter((link) => link.href !== "/dashboard");
  const dashboardLink = links.find((link) => link.href === "/dashboard");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
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

        {/* Dashboard Link - only for signed in users */}
        <SignedIn>
          {dashboardLink && (
            <DropdownMenuItem>
              <Link href={dashboardLink.href} className="capitalize w-full">
                {dashboardLink.label}
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuSeparator />

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
