import { ErrorMessage, Field } from "formik";

interface Props {
  className?: string;
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

const TextField = (props: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="flex flex-col gap-0.5">
        <Field
          id={props.name}
          type={props.type}
          name={props.name}
          className={`py-1 px-2 rounded-md ${props.className}`}
          placeholder={props.placeholder}
        />
        <ErrorMessage
          name={props.name ?? ""}
          className="text-red-500 text-sm pl-1"
          component="span"
        />
      </div>
    </div>
  );
};

export default TextField;
