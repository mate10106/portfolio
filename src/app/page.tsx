import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Approach />
      <Contact />
    </main>
  );
}
