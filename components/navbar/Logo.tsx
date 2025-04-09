import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Logo() {
  return (
    <Button size="icon" asChild variant="ghost" className="cursor-pointer">
      <Link href="/">
        <Image
          src="/logo-2021.svg"
          width="36"
          height="36"
          alt="personal logo"
        />
      </Link>
    </Button>
  );
}
