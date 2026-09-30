import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Heading */}
        <div className="about-heading">
          <p>ABOUT ME</p>

          <h2>
            Building ideas into <span>digital solutions.</span>
          </h2>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <div className="about-intro">
              <span className="about-line"></span>
              <span>WHO I AM</span>
            </div>

            <h3>
              Hi, I'm Devendra <span>👋</span>
            </h3>

            <p>
              I'm a passionate Full Stack Developer and MCA student who enjoys
              building modern, responsive and user-friendly web applications. I
              like working on both frontend interfaces and backend systems.
            </p>

            <p>
              My development journey includes HTML, CSS, JavaScript, React.js,
              Tailwind CSS, Node.js, Express.js and MongoDB. I also have a
              growing interest in Java, OOPs, DSA and problem solving.
            </p>

            <p>
              I'm continuously improving my development skills through projects,
              practice and my MCA journey. My goal is to become a skilled
              Software Engineer and build scalable, real-world applications.
            </p>

            <a href="#contact" className="about-btn">
              Let's Connect <span>↗</span>
            </a>
          </div>

          {/* Info Cards */}
          <div className="about-info">
            <div className="info-card">
              <div className="info-icon">🎓</div>

              <div>
                <h4>Education</h4>
                <p>MCA 1st Year</p>
              </div>

              <span className="card-arrow">↗</span>
            </div>

            <div className="info-card">
              <div className="info-icon">💻</div>

              <div>
                <h4>Development</h4>
                <p>Full Stack / MERN</p>
              </div>

              <span className="card-arrow">↗</span>
            </div>

            <div className="info-card">
              <div className="info-icon">🗄️</div>

              <div>
                <h4>Backend & Database</h4>
                <p>Node.js • Express • MongoDB</p>
              </div>

              <span className="card-arrow">↗</span>
            </div>

            <div className="info-card">
              <div className="info-icon">🚀</div>

              <div>
                <h4>Career Goal</h4>
                <p>Software Engineer</p>
              </div>

              <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
