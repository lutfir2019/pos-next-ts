import { cn } from "@/lib/utils";
import { ErrorMessage, Field } from "formik";
import React from "react";

interface Props {
  name: string;
  label?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.FC<Props> = ({
  className,
  name,
  label,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <div className="flex flex-col gap-0.5">
        <Field
          id={name}
          type={type}
          name={name}
          className={cn(`py-1 px-2 rounded-md`, className)}
          placeholder={placeholder}
          onChange={onChange}
        />
        <ErrorMessage
          name={name}
          className="text-red-500 text-sm pl-1"
          component="span"
        />
      </div>
    </div>
  );
};

export default TextField;
