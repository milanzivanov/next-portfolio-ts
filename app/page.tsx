// import { currentUser } from "@clerk/nextjs/server";
// import Image from "next/image";
// import bg from "@/public/bg.webp";

export default async function Home() {
  // const user = await currentUser();

  return (
    <div
      className={`w-full h-[calc(100dvh-101px)] container flex flex-col items-center justify-center`}
    >
      <div className="absolute inset-0 z-10 bg-slate-300 dark:bg-slate-900"></div>
      {/* <div className="absolute inset-0 z-10">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-center md:rotate-180"
          alt="mobile phone pancile keybord on the table"
        />
      </div> */}

      <div className="relative z-10 w-full bg-slate-50/83 rounded-2xl dark:bg-slate-800 shadow-sm py-5">
        <div className=" max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <h1
            className={`px-5 block text-[1.6rem] leading-[2.3rem] md:text-[3.5rem] 2xl:text-[4rem] tracking-wide lg:leading-[4rem] 2xl:leading-[5.3rem]`}
          >
            <span className="block text-slate-800 dark:text-slate-100">
              I am{" "}
              <span className="font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
                Milan
              </span>
            </span>{" "}
            <span className="block text-slate-800 dark:text-slate-100 ">
              Minimalism lover
            </span>{" "}
            <span className="block font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
              Frontend developer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
