import { IconType } from "react-icons/lib";

export interface SideBar {
  title: string;
  path: any;
  icon: IconType;
  subMenu: SubMenu[];
}

export interface SubMenu {
  title: string;
  path: any;
  icon: IconType;
}
