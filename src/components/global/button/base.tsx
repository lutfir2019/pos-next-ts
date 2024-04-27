interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
}
const ButtonBase = ({ ...props }: Props) => {
  return (
    <button type={props.type}>
      <div
        className={`transition ease-in-out flex justify-center items-center p-2 border rounded-lg ${props.className}`}
      >
        {props.text}
      </div>
    </button>
  );
};

export default ButtonBase;
