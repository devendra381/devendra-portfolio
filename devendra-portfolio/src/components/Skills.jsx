import "./Skills.css";

function Skills() {
  const skills = [
    // Frontend
    { name: "HTML5", level: "90%", icon: "🌐" },
    { name: "CSS3 & SCSS", level: "85%", icon: "🎨" },
    { name: "JavaScript", level: "75%", icon: "⚡" },
    { name: "React.js", level: "70%", icon: "⚛️" },
    { name: "Tailwind CSS", level: "70%", icon: "🌊" },

    // Backend
    { name: "Node.js", level: "65%", icon: "🟢" },
    { name: "Express.js", level: "65%", icon: "🚀" },
    { name: "REST API", level: "65%", icon: "🔌" },

    // Database
    { name: "MongoDB", level: "60%", icon: "🍃" },

    // Programming
    { name: "Java", level: "55%", icon: "☕" },
    { name: "OOPs", level: "60%", icon: "📦" },
    { name: "DSA", level: "50%", icon: "🧠" },
    { name: "Problem Solving", level: "60%", icon: "🧩" },

    // Tools
    { name: "Git", level: "70%", icon: "🔀" },
    { name: "GitHub", level: "75%", icon: "🐙" },
    { name: "Postman", level: "60%", icon: "📮" },

    // AI & Other
    { name: "GenAI", level: "55%", icon: "🤖" },
    { name: "AI Tools", level: "60%", icon: "✨" },
    { name: "Aptitude", level: "65%", icon: "📊" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* Heading */}
        <div className="skills-heading">
          <p>MY SKILLS</p>

          <h2>
            Skills & <span>Technologies.</span>
          </h2>

          <div className="skills-line"></div>

          <p className="skills-subtitle">
            Technologies and concepts I'm learning and working with through
            projects, practice and my MCA journey.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{
                "--delay": `${index * 0.06}s`,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-name-box">
                  <div className="skill-icon">{skill.icon}</div>

                  <h3>{skill.name}</h3>
                </div>

                <span className="skill-percentage">{skill.level}</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: skill.level,
                  }}
                ></div>
              </div>

              <div className="skill-bottom">
                <span>Proficiency</span>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
