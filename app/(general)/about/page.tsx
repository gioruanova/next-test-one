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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam molestias ea totam culpa accusantium ipsum reiciendis ex eaque eos, vitae dolores repudiandae a beatae officiis, odio dignissimos nobis ut?"
        }
      </Paragraph>
    </>
  );
}
