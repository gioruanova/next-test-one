import { Title, Paragraph } from "@/components";

export const metadata = {
  title: "About Me",
  description: "Learn about me",
};

export default function AboutPage() {
  return (
    <>
      <Title>{"About Me"}</Title>
      <Paragraph>
        {
          "about my formation"
        }
      </Paragraph>
    </>
  );
}
