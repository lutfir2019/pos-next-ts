import React from "react";

import { IconsType } from "@/types/globalType";

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
