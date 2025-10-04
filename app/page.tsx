import { Title, Paragraph } from "@/components";
import { MainContainer } from "@/components";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <MainContainer bgColor="dark">
        <Title>{"Homepage"}</Title>
        <Paragraph>{"Welcome to Next Js"}</Paragraph>
        <Link href="/about">About</Link>
      </MainContainer>
    </div>
  );
}
