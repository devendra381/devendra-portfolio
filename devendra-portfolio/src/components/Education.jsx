import "./Education.css";

function Education() {
  const education = [
    {
      year: "2026 – Present",
      title: "Master of Computer Applications (MCA)",
      institute: "ICFAI University",
      location: "Jaipur, Rajasthan",
      description:
        "Currently pursuing MCA and strengthening my skills in software development, programming, databases, web development and problem solving.",
      icon: "🎓",
    },
    {
      year: "Completed",
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Bachelor's Degree",
      location: "Rajasthan, India",
      description:
        "Completed BCA with a foundation in computer applications, programming and web technologies.",
      icon: "💻",
    },
    {
      year: "Completed",
      title: "12th — Mathematics & Science",
      institute: "Senior Secondary Education",
      location: "Rajasthan, India",
      description:
        "Completed senior secondary education with Mathematics and Science.",
      icon: "📚",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-heading">
          <p>MY EDUCATION</p>

          <h2>
            Education & <span>Learning.</span>
          </h2>

          <div className="education-line"></div>

          <p className="education-subtitle">
            My academic journey and continuous learning towards becoming a
            skilled Software Engineer.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={item.title}>
              <div className="timeline-dot">{item.icon}</div>

              <div className="education-card">
                <div className="education-top">
                  <span className="education-year">{item.year}</span>

                  <span className="education-number">0{index + 1}</span>
                </div>

                <h3>{item.title}</h3>

                <h4>{item.institute}</h4>

                <span className="education-location">📍 {item.location}</span>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
