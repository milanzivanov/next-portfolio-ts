type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/skills", label: "skills" },
  { href: "/contact", label: "contact" },
  { href: "/projects/create", label: "create project" },
  { href: "/projects", label: "projects" }
];
