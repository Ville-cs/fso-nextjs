interface InputContainerProps {
  children: React.ReactNode;
}

const InputContainer = ({ children }: InputContainerProps) => {
  return (
    <div className="text-3xl my-7 grid grid-cols-[120px_300px] items-center gap-4">
      {children}
    </div>
  );
};

export default InputContainer;
