import { useField } from "formik";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  primary?: boolean;
}

const InputCustom: React.FC<Props> = ({
  label,
  name,
  className,
  placeholder,
  type = "text",
  disabled,
  primary,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={cn("grid w-full gap-2 items-center", className)}>
      <div className="relative w-fit pr-3 pt-2 flex">
        {label && <Label htmlFor={name}>{label}</Label>}
        {primary && <span className="absolute text-red-500 top-0 right-0">*</span>}
      </div>
      <div className="relative pb-[1.2rem]">
        <Input
          id={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...field}
          className="disabled:bg-slate-200 w-[100%] dark:disabled:bg-slate-900 text-black dark:text-white placeholder:text-gray-500 placeholder:dark:text-gray-400"
        />
        {meta.touched && meta.error && (
          <span className="text-red-500 text-xs absolute bottom-0 left-1">
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputCustom;
