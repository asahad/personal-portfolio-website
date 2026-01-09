
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";    // main CSS file (ensure this is imported after Bootstrap for overrides)
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS library for scroll animations
    AOS.init({ 
      duration: 600,      // global default animation duration in ms
      once: true,         // whether animation should happen only once while scrolling down
      // Disable animations on users' request for reduced motion:
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    });
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
