export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white dark:bg-black text-white min-h-screen">
      <main className="w-[90%] max-w-[1700px] mx-auto py-8">{children}</main>
    </section>
  )
}
