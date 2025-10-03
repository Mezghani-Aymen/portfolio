import Hero from "@/components/layout/Hero/Hero";
import About from "../components/layout/About/About";
import Project from "../components/layout/Project/Project";
import Skills from "../components/layout/Skills/Skills";
import CallToAction from "../components/layout/CallToAction/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Skills />
      <CallToAction />
    </>
  );
}