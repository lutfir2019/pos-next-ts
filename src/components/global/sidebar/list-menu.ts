import { Home, Package, ShoppingCart } from "lucide-react";

import { SideBar } from "@/types/sidebar";

export const sideBar: SideBar[] = [
  {
    title: "Dashboard",
    path: "/pages/dashboard",
    icon: Home,
    subMenu: [],
  },
  {
    title: "Menu",
    path: "/pages/menu",
    icon: ShoppingCart,
    subMenu: [],
  },
  {
    title: "Products",
    path: "/pages/product",
    icon: Package,
    subMenu: [],
  },
];
