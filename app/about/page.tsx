import Image from "next/image";

import image1 from "@/public/Milan_left.webp";
import { IconButton } from "@/components/form/Buttons";

export const metadata = {
  title: "About page"
};

export default async function AboutPage() {
  return (
    <section className="w-full">
      <div className="container h-auto md:h-[calc(100dvh-100px)] flex items-center justify-center">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          <div className="w-full flex flex-col md:flex-row bg-transparent md:bg-white py-5 md:p-5 xl:rounded-md md:shadow-md">
            <div className="flex flex-col justify-center flex-2 space-y-1 md:space-y-4 pr-3 pb-5">
              <h1 className="text-2xl tracking-wider text-grey-200 dark:text-slate-800 font-bold">
                Bit about myself
              </h1>
              <p className="text-grey-200 dark:text-slate-800 text-sm 2xl:text-lg">
                Hi, I&apos;m Milan an enthusiastic front-end developer with 2+
                years of experience at{" "}
                <a
                  href="https://www.vegaitglobal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
                >
                  Vega IT Solution
                </a>
                ,{" "}
                <a
                  href="https://omadriatic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
                >
                  OMA Adriatic
                </a>
                , and{" "}
                <a
                  href="https://htec.rs/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 dark:text-blue-700 hover:text-blue-800 transition-colors duration-300 ease-in-out"
                >
                  HTEC
                </a>
                , I specialize in crafting clean, user-friendly digital
                experiences.
              </p>
              <p className="text-grey-200 dark:text-slate-800 text-sm 2xl:text-lg">
                This is my little corner of the internet where I share my
                thoughts and ideas. Let&apos;s connect I&apos;m open to
                freelance opportunities and always eager to learn.
              </p>
              <p className="text-grey-200 dark:text-slate-800 text-sm 2xl:text-lg">
                Excited about mastering{" "}
                <span className="font-semibold text-blue-500 dark:text-blue-700">
                  Next.js
                </span>{" "}
                for my next adventure 🚀
              </p>
            </div>
            <div className="relative flex-1">
              <Image
                className="object-cover object-center bg-gray-300 rounded-md shadow-md"
                src={image1}
                alt="Family sitting around a fire pit in front of cabin"
                placeholder="blur"
                quality={80}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex w-full md:px-5 xl:px-0 justify-end my-5">
            <IconButton actionType="back" text="Back home" href="/" />
          </div>
        </div>
      </div>
    </section>
  );
}
