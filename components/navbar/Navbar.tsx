import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="relative z-20 ">
      <div className="container flex justify-between flex-row sm:justify-between items-center flex-wrap gap-4 py-8">
        <Logo />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
