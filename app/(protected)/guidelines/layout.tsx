import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar" 

export default function GuidelineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar variant="dark" />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  )
}