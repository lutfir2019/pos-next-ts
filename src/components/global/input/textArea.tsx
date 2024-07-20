import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useField } from "formik";
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

const TextArea: React.FC<Props> = ({
  label,
  name,
  className,
  placeholder,
  disabled,
  primary,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={cn("grid w-full items-center", className)}>
      <div className="flex gap-1">
        {label && <Label htmlFor={name}>{label}</Label>}
        {primary && <span className="text-red-500 -translate-y-[7px]">*</span>}
      </div>
      <div className="relative pb-[1.2rem]">
        <Textarea
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          {...field}
          className="disabled:bg-slate-200 w-[100%] dark:disabled:bg-slate-900 text-black dark:text-white placeholder:text-gray-500 placeholder:dark:text-gray-400"
        >
          {meta.touched && meta.error && (
            <span className="text-red-500 text-xs absolute bottom-0 left-1">
              {meta.error}
            </span>
          )}
        </Textarea>
      </div>
    </div>
  );
};

export default TextArea;
