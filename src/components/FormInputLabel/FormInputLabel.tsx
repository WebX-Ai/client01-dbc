import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface PropsType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const FormInputLabel = ({ label, ...rest }: PropsType) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="" className="text-base font-semibold text-primary">
        {label}
      </label>
      <input
        className="p-2 text-primary rounded-md border-2 border-secondary/30 placeholder:text-secondary/30 font-normal focus:outline-none"
        {...rest}
      />
    </div>
  );
};

export default FormInputLabel;
