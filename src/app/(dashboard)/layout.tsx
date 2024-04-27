import Navbar from "@/components/dashboard/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Personal Internet Assistant Dashboard",
};

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default layout