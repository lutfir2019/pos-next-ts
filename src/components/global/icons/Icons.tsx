import { IconsType } from "@/types/globalType";
import React from "react";

interface IconsProps {
  name: IconsType;
  size?: number;
  className?: string;
}

const Icons: React.FC<IconsProps> = ({ name, size = 20, className }) => {
  const NameIcon: IconsType = name;

  return <NameIcon size={size} className={className} />;
};
export default Icons;
