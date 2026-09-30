import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "macOS Clone",
      description:
        "A modern macOS-inspired desktop interface built with React.js with interactive windows and a responsive layout.",
      tech: ["React", "Vite", "SCSS"],
      live: "https://kiran66765.github.io/macos-clone-react/",
      github: "https://github.com/",
    },
    {
      number: "02",
      title: "Spotify Clone",
      description:
        "A responsive music streaming interface inspired by Spotify with a clean and modern user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/devendra381/spotify-clone",
    },
    {
      number: "03",
      title: "College Website",
      description:
        "A responsive college website featuring Home, About, Courses, Events, Contact and Login sections.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "https://github.com/devendra381/P1",
    },
    {
      number: "04",
      title: "Product Management Dashboard",
      description:
        "A full-stack product management application with authentication, dashboard functionality and backend APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "#",
      github: "https://github.com/devendra381",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p>MY WORK</p>
          <h2>
            Featured <span>Projects.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
