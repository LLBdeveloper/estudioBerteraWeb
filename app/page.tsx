import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import About from "../src/components/About"
import Services from "../src/components/Services"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"
import "../src/globals.css"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
