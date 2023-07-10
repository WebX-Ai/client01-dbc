import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface PropsType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  outlined?: boolean;
}

const Button: React.FC<PropsType> = ({ label, outlined, ...rest }) => {
  return (
    <button
      className={`${
        outlined ? "border-2 border-primary text-primary" : "bg-primary text-white "
      } px-4 py-2 rounded-md font-medium w-fit`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
