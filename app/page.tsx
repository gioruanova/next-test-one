import { Navbar } from "@/components";
import { Title, Paragraph } from "@/components";
import { MainContainer } from "@/components";
export default function Home() {
  return (
    <div>
      <Navbar />
      <MainContainer bgColor="dark">
        <Title>{"Homepage"}</Title>
        <Paragraph>{"Welcome to Next Js"}</Paragraph>
      </MainContainer>
    </div>
  );
}
