import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserIcon from "./UserIcon";
import LinksDropdown from "./LinksDropdown";

export default function Navbar() {
  return (
    <nav className="relative z-20">
      <div className="container flex justify-between flex-row items-center flex-wrap gap-4 py-4 md:py-6">
        <Logo />

        <div className="hidden md:flex gap-4 items-center transition-all bg-blue-200/30 dark:bg-slate-700/60 rounded-full px-3 py-2">
          <Navigation />
          <UserIcon />
        </div>

        <div className=" hidden md:flex items-center">
          <DarkMode />
        </div>

        <div className="md:hidden flex items-center gap-4 rounded-md">
          <LinksDropdown />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
}
