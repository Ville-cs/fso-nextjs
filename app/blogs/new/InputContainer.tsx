interface InputContainerProps {
  children: React.ReactNode;
}

const InputContainer = ({ children }: InputContainerProps) => {
  return <div className="text-3xl my-7">{children}</div>;
};

export default InputContainer;
