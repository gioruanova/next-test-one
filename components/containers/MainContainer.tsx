type MainContainerProps = {
  children: React.ReactNode;
  bgColor?: "dark" | "light" | "normal";
};

export const MainContainer = ({
  children,
  bgColor = "dark",
}: MainContainerProps) => {
  const bgClass =
    bgColor === "dark"
      ? "bg-gray-800"
      : bgColor === "light"
      ? "bg-gray-600"
      : "bg-sky-800";

  return (
    <div
      className={`flex flex-col max-w-[1000px] w-full text-center mt-5 p-4 rounded items-center justify-center m-auto ${bgClass}`}
    >
      {children}
    </div>
  );
};
