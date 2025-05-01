import Image from "next/image";

import image1 from "@/public/Milan_right.webp";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import { IconButton } from "@/components/form/Buttons";

export const metadata = {
  title: "Contact page"
};

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-800">
      <div className="container h-[calc(100dvh-68px)] md:h-[calc(100dvh-101px)] flex md:flex flex-col items-center justify-center">
        <div className="max-w-5xl  2xl:max-w-7xl mx-auto">
          <div className="bg-white md:p-5 2xl:rounded-md shadow-md flex flex-col md:flex-row">
            <div className="flex-1">
              <Image
                className="object-cover flex-1 bg-gray-300 md:rounded-md"
                src={image1}
                alt="milan picture"
                placeholder="blur"
                quality={80}
              />
            </div>

            <div className="flex-1 p-5">
              <h1 className="text-2xl tracking-wider md:text-3xl mb-2 text-gray-600 font-bold">
                Get in touch with me
              </h1>

              <p className="text-grey-200 dark:text-slate-800 text-base 2xl:text-lg mb-5">
                I&apos;d love to hear from you if you have any questions or want
                to work together. Don&apos;t hesitate to reach out!
              </p>

              <h3 className="text-lg text-grey-200 dark:text-slate-800 font-semibold tracking-wide">
                You can find me on:
              </h3>
              <ul className="flex flex-wrap mb-5  bg-slate-100  p-5 rounded-md shadow-md">
                <li className="flex items-center mr-3">
                  <a
                    className="flex items-center text-lg md:text-xl text-blue-500 dark:text-blue-700 hover:text-blue-800 gap-1"
                    href="https://www.linkedin.com/in/milan-%C5%BEivanov1983/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl md:text-2xl" />
                    <span className="text-base">LinkedIn</span>
                  </a>
                </li>
                <li className="flex items-center mr-3">
                  <a
                    className="flex items-center text-lg md:text-xl text-blue-500 dark:text-blue-700 hover:text-blue-800 gap-1"
                    href="https://github.com/milanzivanov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xl md:text-2xl" />

                    <span className="text-base">Github</span>
                  </a>
                </li>
              </ul>
              <h4 className="text-md text-grey-200 dark:text-slate-800 font-semibold tracking-wide">
                email:{" "}
                <span className="text-blue-500 dark:text-blue-700 text-sm italic">
                  milan.zivanov@gmail.com
                </span>
              </h4>
            </div>
          </div>
          {/* BTH */}
          <div className="flex w-full md:px-5 xl:px-0 justify-end my-5">
            <IconButton actionType="back" href="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
