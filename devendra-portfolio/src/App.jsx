import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Devendra Kumar Dhaked. All rights
          reserved.
        </p>

        <div className="footer-links">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </a>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}

export default App;
