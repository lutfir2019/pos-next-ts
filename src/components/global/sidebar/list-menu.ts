import { SideBar } from "@/types/sidebar";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";

export const sideBar: SideBar[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: AiFillHome,
    subMenu: [
      {
        title: "Dashboard",
        path: "/",
        icon: AiFillHome,
      },
      {
        title: "Product",
        path: "/pages/product",
        icon: FaCartShopping,
      },
    ],
  },
  {
    title: "Auth",
    path: "/auth",
    icon: IoIosLogIn,
    subMenu: [],
  },
];
