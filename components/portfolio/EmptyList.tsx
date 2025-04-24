import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptyList({
  heading = "No projects in the list.",
  message = "Keep exploring our properties.",
  btnText = "back home"
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <section className="h-[calc(100dvh-101px)] bg-slate-50 dark:bg-slate-800 py-5">
      <div className="container mt-4">
        <h2 className="text-xl font-bold">{heading}</h2>
        <p className="text-lg">{message}</p>
        <Button asChild className="mt-4 capitalize" size="lg">
          <Link href="/portfolio">{btnText}</Link>
        </Button>
      </div>
    </section>
  );
}
