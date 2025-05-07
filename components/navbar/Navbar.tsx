import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="relative bg-blue-200/10 dark:bg-slate-700/20 z-20">
      <div className="container  flex justify-between flex-row sm:justify-between items-center flex-wrap gap-4 py-4 md:py-8 ">
        <Logo />
        <div className="flex gap-4 items-center">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-md">
            <DarkMode />
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 rounded-md">
            <LinksDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
