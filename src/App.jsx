import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import "./index.css";


function StautsBadge({ isAvailable }) {
  return (
    <span className={isAvailable ? "badge badge--open" : "badge badge--busy"}>
      {isAvailable ? "Open to work" : "Busy learning"}
    </span>
  )
};

function Skills({ skills }) {
  return (
    <ul >
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  )
}
function SocialLinks({ github, linkedin, website }) {
  return (
    <div className="social-links">
      {github && (
        <a className="social-link" href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
      {linkedin && (
        <a className="social-link" href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      )}
      {website && (
        <a className="social-link" href={website} target="_blank" rel="noreferrer">
          Website
        </a>
      )}
    </div>
  );
}

function App() {

  const isAvailable = true;

  const name = "Poch Sreynich";
  const goal = "I’m learning React and developing my backend skills to become a full-stack developer. My goal is to create complete products in the future and use my skills to solve real-world problems.";

  const title = "Frontend Developer, Student";
  const photoUrl = "https://i.pinimg.com/736x/c1/4a/8f/c14a8f28499786edffadbbaa81722183.jpg";


  const location = "Phnom Penh, Cambodia";
  const skills = ["React", "JavaScript", "CSS", "Git", "HTML"];
  const links = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    website: "https://poch.sreynich.workers.dev/",
  };


  return (
    <>
      <div className="profile">

        <img className="profile-photo" src={photoUrl} alt={'profile photo'} />
        <h1 >{name}</h1>
        <p className="profile-title">{title}</p>
        <p className="profile-location">{location}</p>
        <StautsBadge isAvailable={isAvailable} />

        <p > <strong>Goal:</strong> {goal}</p>
        <h2 className="section-heading">Skills</h2>
        <Skills skills={skills} />

        <h2 className="section-heading">Connect</h2>
        <SocialLinks
          github={links.github}
          linkedin={links.linkedin}
          website={links.website}
        />

      </div>
    </>
  );
}

export default App;
