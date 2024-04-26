import Navbar from "@/components/ui/landing/navbar";


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