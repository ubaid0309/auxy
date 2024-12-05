"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
import { menuOptions } from "@/lib/constants";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import {
  Database,
  File,
  GitBranch,
  LucideMousePointerClick,
  Slack,
} from "lucide-react";
import { ModeToggle } from "../global/ModeToggle";

const MenuOptions = () => {
  const pathName = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6' px-2">
      <div
        className="flex items-center justify-center flex-col 
      Templates
      gap-8"
      >
        <Link href={"/"} className="flex font-bold flex-row">
          Auxy
        </Link>
        <TooltipProvider>
          {menuOptions.map((menu) => {
            return (
              <ul key={menu.name} className="z-20">
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <li>
                      <Link
                        href={menu.href}
                        className={clsx(
                          "group h-[28px] w-[28px] flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                          {
                            "dark:bg-[#2F006B] bg-[#EEE0FF]":
                              pathName === menu.href,
                          }
                        )}
                      >
                        <menu.Component selected={pathName === menu.href} />
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="bg-black/10 backdrop-blur-xl ml-1 "
                  >
                    <p>{menu.name}</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            );
          })}
        </TooltipProvider>

        <Separator />

        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[#353346]">
            <GitBranch className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[#353346]">
            <Database className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>

          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[#353346]">
            <File className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[#353346]">
            <Slack className="dark:text-white" size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default MenuOptions;
