import { Header } from '@/components/header/header'
import { Footer } from '@/components/home/footer'

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-black text-white min-h-screen">
      <Header />
      <main className="w-[90%] max-w-[1700px] mx-auto py-8">{children}</main>
      <Footer />
    </section>
  )
}
