"use client";

import Link from "next/link";
import { sideBar } from "./list-menu";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Children {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Children) => {
  const [openSidebar, setOpenSidebar] = useState(false),
    [openSubmenu, setOpenSubmenu] = useState(false),
    pathname = usePathname();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpenSidebar(!openSidebar)}
        className="flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <FaBarsStaggered size={25} />
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          openSidebar ? "" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sideBar?.map((data, index) =>
              data.subMenu?.length < 1 ? (
                <Link href={data?.path} key={index + 1}>
                  <li
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                      pathname == data?.path
                        ? "dark:bg-gray-700 bg-gray-100"
                        : ""
                    }`}
                  >
                    {Icons(data?.icon)}
                    <span className="ms-3">{data.title}</span>
                  </li>
                </Link>
              ) : (
                <li key={index + 1}>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                    onClick={() => setOpenSubmenu(!openSubmenu)}
                  >
                    {Icons(data?.icon)}
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {data.title}
                    </span>
                    {openSubmenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  <ul className="py-2 space-y-2">
                    {data.subMenu?.map(
                      (submenu, index_submenu) =>
                        openSubmenu && (
                          <Link href={submenu.path} key={index_submenu + 1}>
                            <li
                              className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                                pathname == submenu?.path
                                  ? "dark:bg-gray-700 bg-gray-100"
                                  : ""
                              }`}
                            >
                              {Icons(submenu?.icon)}
                              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                {submenu.title}
                              </span>
                            </li>
                          </Link>
                        )
                    )}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64" onClick={() => setOpenSidebar(false)}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

const Icons = (NameIcon: IconType) => <NameIcon size={20} />;
