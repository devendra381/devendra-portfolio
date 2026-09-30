import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <div className="resume-content">
          <p className="resume-label">MY RESUME</p>

          <h2>
            Let's connect & <span>work together.</span>
          </h2>

          <p className="resume-text">
            Interested in working together or want to know more about my skills
            and experience? Check out my resume.
          </p>

          <div className="resume-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn primary"
            >
              View Resume ↗
            </a>

            <a href="/resume.pdf" download className="resume-btn secondary">
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
