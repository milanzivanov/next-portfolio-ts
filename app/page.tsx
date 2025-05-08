import Image from "next/image";
import rocket from "@/public/rocket333.png";

export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-68px)] md:h-[calc(100dvh-100px)] rounded-2xl flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="relative z-10 flex items-center justify-center rounded-2xl gap-0 md:gap-5 max-w-7xl p-0 py-5 md:p-5 mx-auto">
          {/* left */}
          <div className="relative hidden md:flex border-6 border-[#0071bc] dark:border-slate-200 p-3 items-center justify-end dark:bg-slate-800 overflow-hidden rounded-2xl">
            <Image
              src={rocket}
              quality={80}
              alt="rocket in the space illustration"
              className="object-cover object-center rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* right */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <h1
              className={`px-5 block text-[1.5rem] leading-[2.3rem] md:text-[2.7rem] 2xl:text-[4rem] tracking-wide lg:leading-[4rem] 2xl:leading-[5.3rem]`}
            >
              <span className="block text-slate-800 dark:text-slate-100">
                I am{" "}
                <span className="font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
                  Milan
                </span>
              </span>{" "}
              <span className="block text-slate-800 dark:text-white ">
                Curiosity driven
              </span>{" "}
              <span className="block font-extrabold bg-gradient-to-r from-[#0071bc] to-[#6366f1] bg-clip-text text-transparent">
                Frontend developer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
