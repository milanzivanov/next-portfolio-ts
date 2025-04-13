import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="cursor-pointer" href="/">
      <Image src="/logo-2021.svg" width="36" height="36" alt="personal logo" />
    </Link>
  );
}
