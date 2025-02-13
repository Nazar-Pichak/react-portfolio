import Intro from "@/components/intro";
import SectionDevider from "@/components/section-devider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro/>
      <SectionDevider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>  
    </main>
  );
}
