interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <span className="text-xl text-red-400">{children}</span>;
};

export default Content;
