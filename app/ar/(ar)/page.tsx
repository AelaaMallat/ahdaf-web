import Home from "@pages/home_ar/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahdaf",
  description: "Ahdaf website",
};
export default function Page() {
  return <Home />;
}
