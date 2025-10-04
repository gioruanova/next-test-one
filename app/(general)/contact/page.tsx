import { Title, Paragraph } from "@/components";

export const metadata = {
  title: "Contact Me",
  description: "Leave a message",
};

export default function ContactPage() {
  return (
    <>
      <Title>{"Contact"}</Title>
      <Paragraph>
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam molestias ea totam culpa accusantium ipsum reiciendis ex eaque eos, vitae dolores repudiandae a beatae officiis, odio dignissimos nobis ut?"
        }
      </Paragraph>
    </>
  );
}
