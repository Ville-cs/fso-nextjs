import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ ...props }: InputProps) => {
  return <input {...props} className="ml-5 bg-gray-700" />;
};

export default Input;
