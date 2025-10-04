import { Navbar } from "@/components";
import { MainContainer } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-5 uppercase underline mt-5">Layout (General)</h1>
        <MainContainer bgColor="dark">{children}</MainContainer>
      </div>
    </>
  );
}
