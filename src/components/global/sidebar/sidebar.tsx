"use client";

import { Package2 } from "lucide-react";
import Link from "next/link";

import { ThemeButton } from "@/components/global/button/ThemeButton";
import Icons from "@/components/global/icons/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { sideBar } from "./list-menu";

const Sidebar = () => {
  return (
    <TooltipProvider>
      <aside className="fixed bg-[#320617] dark:bg-background inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/pages/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-[#6F042D] dark:bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {sideBar.map(({ icon, path, title }) => (
            <Tooltip key={title}>
              <TooltipTrigger asChild>
                <Link
                  href={path}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Icons name={icon} className="h-5 w-5" />
                  <span className="sr-only">{title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <ThemeButton />
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
