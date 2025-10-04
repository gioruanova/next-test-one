import type { Metadata } from "next";
import { Title, Paragraph } from "@/components";

export const metadata: Metadata = {
  title: "Pricing List",
  description: "Check out or prices",
  authors: [{ name: "John Doe" }, { name: "Mark Z" }],
};

export default function PricingPage() {
  return (
    <>
      <Title>{"Welcome to Princing"}</Title>
      <Paragraph>
        {
          "Lorem pricing"
        }
      </Paragraph>
    </>
  );
}
