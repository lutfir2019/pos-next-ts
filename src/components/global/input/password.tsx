import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  primary?: boolean;
}

const Password: React.FC<Props> = ({
  label,
  name,
  className,
  placeholder,
  disabled,
  primary,
}) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cn("grid w-full items-center", className)}>
      <div className="flex gap-1">
        {label && <Label htmlFor={name}>{label}</Label>}
        {primary && <span className="text-red-500 -translate-y-[7px]">*</span>}
      </div>
      <div className="relative pb-[1.2rem]">
        <Input
          id={name}
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          placeholder={placeholder}
          {...field}
          className="disabled:bg-slate-200 w-[100%] dark:disabled:bg-slate-900 text-black dark:text-white placeholder:text-gray-500 placeholder:dark:text-gray-400 pr-10"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-600 dark:text-gray-400"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
        {meta.touched && meta.error && (
          <span className="text-red-500 text-xs absolute bottom-0 left-1">
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Password;
