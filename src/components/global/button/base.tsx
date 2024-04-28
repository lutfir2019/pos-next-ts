interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}
const ButtonBase = ({ ...props }: Props) => {
  return (
    <button disabled={props.disabled} type={props.type} onClick={props.onClick}>
      <div
        className={`transition ease-in-out flex justify-center items-center p-2 border rounded-lg ${props.className}`}
      >
        {props.text}
      </div>
    </button>
  );
};

export default ButtonBase;
