import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Index = () => {
  useScrollReveal();
  return (
    <>
      <Helmet>
        <title>Bhavesh Maske | Software Engineer & Cloud Specialist</title>
        <meta 
          name="description" 
          content="Portfolio of Bhavesh Maske - Software Engineer specializing in AWS cloud infrastructure, Docker, and DevOps. Building scalable solutions with 99.9% uptime." 
        />
        <meta name="keywords" content="Bhavesh Maske, Software Engineer, AWS, Cloud, DevOps, Docker, Portfolio" />
        <link rel="canonical" href="https://bhaveshmaske.dev" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
