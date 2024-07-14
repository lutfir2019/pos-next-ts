import { IconsType } from "./globalType";

export interface SideBar {
  title: string;
  path: any;
  icon: IconsType;
  subMenu: SubMenu[];
}

export interface SubMenu {
  title: string;
  path: any;
  icon: IconsType;
}
