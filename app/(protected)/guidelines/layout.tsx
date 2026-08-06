import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar" 
import Footer from "@/components/Footer"

export default function GuidelineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar variant="dark" />
      <main className="flex lg:gap-8 px-8 lg:px-24 mb-8 lg:mb-20 text-brand-black">
        <Sidebar />
        <div className="max-w-280">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}