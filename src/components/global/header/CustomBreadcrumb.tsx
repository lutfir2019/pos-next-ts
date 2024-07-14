"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { sideBar } from "../sidebar/list-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomBreadcrump = () => {
  const pathName = usePathname();
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {sideBar
          .filter(({ path }) => pathName.includes(path))
          .map(({ title, path }, index) => {
            const isCurrentPage = pathName === path;
            return (
              <BreadcrumbItem key={title}>
                {isCurrentPage ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={path}>{title}</Link>
                  </BreadcrumbLink>
                )}
                {index <
                  sideBar.filter(({ path }) => pathName.includes(path)).length -
                    1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrump;
