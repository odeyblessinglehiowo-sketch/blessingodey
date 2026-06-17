import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import WhyWorkWithMe from "@/components/why-work-with-me/WhyWorkWithMe";
import Process from "@/components/process/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}