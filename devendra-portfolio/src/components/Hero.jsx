import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed = deleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentRole.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const nextText = currentRole.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-circle circle-one"></div>
      <div className="hero-bg-circle circle-two"></div>

      <div className="hero-grid"></div>

      <div className="hero-content">
        <p className="hero-small">
          <span className="status-dot"></span>
          Hello, I'm
        </p>

        <h1>
          Devendra <span>Kumar Dhaked</span>
        </h1>

        <h2>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and interactive web applications using
          HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work <span>↗</span>
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

export default Hero;
