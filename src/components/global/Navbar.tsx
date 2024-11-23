import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { MenuIcon } from "lucide-react";

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between ">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Auxy</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 ">
          <li>
            <Link href={"#"}>Products</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Clients</Link>
          </li>
          <li>
            <Link href={"#"}>Resources</Link>
          </li>
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>
          <li>
            <Link href={"#"}>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex gap-4 items-center">
        <Link
          href={"/dashboard"}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {
              //WIP: wire up user
              true ? "Dashboard" : "Get Started"
            }
          </span>
        </Link>
        {
          //WIP: wire up user
        }
        <MenuIcon className="cursor-pointer" />
      </aside>
    </header>
  );
};

export default Navbar;
