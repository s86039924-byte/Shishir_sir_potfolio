import type { Metadata } from "next";
import DostClient from "./DostClient";

export const metadata: Metadata = {
  title: "IIT Study Forum Mentora Dost",
  description: "IIT Study Forum Mentora Dost iframe login wrapper",
};

export default function DostPage() {
  return <DostClient />;
}