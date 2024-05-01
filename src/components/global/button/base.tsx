import React, { useState } from "react";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  theme?: "primary" | "success" | "error" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

interface Tema {
  [key: string]: string;
}

const temaButton: Tema = {
  primary: "bg-blue-600 border-blue-300",
  success: "bg-green-600 border-green-300",
  error: "bg-red-600 border-red-300",
  secondary: "bg-gray-600 border-gray-600",
};
const temaButtonHover: Tema = {
  primary: "bg-blue-700",
  success: "bg-green-700",
  error: "bg-red-700",
  secondary: "bg-gray-700",
};

const ButtonBase = ({ children, ...props }: Props) => {
  const [themeButton] = useState(() => temaButton[props.theme ?? "primary"]);
  const [themeButtonHover] = useState(
    () => temaButtonHover[props.theme ?? "primary"]
  );
  return (
    <button disabled={props.disabled} type={props.type} onClick={props.onClick}>
      <div
        className={`text-white transition ease-in-out flex justify-center items-center p-2 border rounded-lg
        hover:${themeButtonHover}
         ${props.className ?? ""} ${themeButton}`}
      >
        {children}
      </div>
    </button>
  );
};

export default ButtonBase;
