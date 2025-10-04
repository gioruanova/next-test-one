import type { Metadata } from "next";
import { Title, Paragraph } from "@/components";

export const metadata: Metadata = {
  title: "Pricing List",
  description: "Check out or prices",
  authors: [{ name: "Jorge Ruanova" }, { name: "Luios Perez" }],
};

export default function PricingPage() {
  return (
    <>
      <Title>{"Welcome to Princing"}</Title>
      <Paragraph>
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam molestias ea totam culpa accusantium ipsum reiciendis ex eaque eos, vitae dolores repudiandae a beatae officiis, odio dignissimos nobis ut?"
        }
      </Paragraph>
    </>
  );
}
