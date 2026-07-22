import Navbar from "@/components/Navbar"

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar variant="dark" />
      <main className="flex">
        {children}
      </main>
    </>
  )
}