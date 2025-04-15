import { IconType } from "react-icons";
export type Technology = {
  name: string;
  icon: IconType;
  selected: boolean;
};
import { LiaHtml5, LiaCss3 } from "react-icons/lia";
import { FaReact, FaGithub, FaGulp, FaFigma, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiVite,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiVercel,
  SiAstro
} from "react-icons/si";

export const technologies: Technology[] = [
  { name: "html5", icon: LiaHtml5, selected: false },
  { name: "css3", icon: LiaCss3, selected: false },
  { name: "react", icon: FaReact, selected: false },
  {
    name: "next",
    icon: SiNextdotjs,
    selected: false
  },
  { name: "prisma", icon: SiPrisma, selected: false },
  { name: "typescript", icon: SiTypescript, selected: false },
  { name: "javascript", icon: SiJavascript, selected: false },
  { name: "tailwindcss", icon: SiTailwindcss, selected: false },
  { name: "supabase", icon: SiSupabase, selected: false },
  { name: "github", icon: FaGithub, selected: false },
  { name: "gulp", icon: FaGulp, selected: false },
  { name: "figma", icon: FaFigma, selected: false },
  { name: "sass", icon: FaSass, selected: false },
  { name: "vite", icon: SiVite, selected: false },
  { name: "illustrator", icon: SiAdobeillustrator, selected: false },
  { name: "photoshop", icon: SiAdobephotoshop, selected: false },
  { name: "vercel", icon: SiVercel, selected: false },
  { name: "astro", icon: SiAstro, selected: false }
];

export const conservativeTechnologies: Technology[] = [
  { name: "html5", icon: LiaHtml5, selected: false },
  { name: "css3", icon: LiaCss3, selected: false },
  { name: "react", icon: FaReact, selected: false },
  { name: "next", icon: SiNextdotjs, selected: false },
  { name: "prisma", icon: SiPrisma, selected: false },
  { name: "typescript", icon: SiTypescript, selected: false },
  { name: "javascript", icon: SiJavascript, selected: false },
  { name: "tailwindcss", icon: SiTailwindcss, selected: false },
  { name: "supabase", icon: SiSupabase, selected: false },
  { name: "github", icon: FaGithub, selected: false },
  { name: "gulp", icon: FaGulp, selected: false },
  { name: "figma", icon: FaFigma, selected: false },
  { name: "sass", icon: FaSass, selected: false },
  { name: "vite", icon: SiVite, selected: false },
  { name: "illustrator", icon: SiAdobeillustrator, selected: false },
  { name: "photoshop", icon: SiAdobephotoshop, selected: false },
  { name: "vercel", icon: SiVercel, selected: false },
  { name: "astro", icon: SiAstro, selected: false }
];
