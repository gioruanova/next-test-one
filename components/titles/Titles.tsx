export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-4xl font-bold uppercase mb-3">{children}</h1>;
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-2xl ">{children}</span>;
};
