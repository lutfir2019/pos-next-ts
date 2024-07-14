import React from "react";
import { useField } from "formik";
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
    <div
      className={cn("grid w-full min-w-[100%] items-center gap-1.5", className)}
    >
      <div className="flex gap-1">
        {label && <Label htmlFor={name}>{label}</Label>}
        {primary && <span className="text-red-500 -translate-y-[7px]">*</span>}
      </div>
      <Input
        id={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...field}
        className="disabled:bg-slate-200 w-[100%] dark:disabled:bg-slate-900 text-black dark:text-white placeholder:text-black placeholder:dark:text-white"
      />
      {meta.touched && meta.error && (
        <span className="text-red-500">{meta.error}</span>
      )}
    </div>
  );
};

export default InputCustom;
