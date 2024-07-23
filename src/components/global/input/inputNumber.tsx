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
  disabled?: boolean;
  primary?: boolean;
}

const InputNumber: React.FC<Props> = ({
  label,
  name,
  className,
  placeholder,
  disabled,
  primary,
}) => {
  const [field, meta] = useField(name);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    if (!/^\d*$/.test(inputValue)) {
      e.currentTarget.value = inputValue.replace(/\D/g, "");
    }
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
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          {...field}
          className="disabled:bg-slate-200 w-[100%] dark:disabled:bg-slate-900 text-black dark:text-white placeholder:text-gray-500 placeholder:dark:text-gray-400"
          onInput={handleInput}
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

export default InputNumber;
