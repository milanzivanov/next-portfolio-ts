type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/skills", label: "skills" },
  { href: "/contact", label: "contact" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/projects/create", label: "add project" },
  { href: "/projects", label: "projects" }
];
