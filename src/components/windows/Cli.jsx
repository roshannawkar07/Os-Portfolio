import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express,
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Treandoura - MERN Stack
2. BraveOne - MERN Stack (Ai)
3. Banking Backend System - Node JS`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `# Web Developer @ Boost Engine (Nov 2024 - May 2025)
  - Played a key role in designing and developing scalable MERN-stack web     applications, 
  - Collaborated with a cross-functional team using GitHub for version control

# Node JS developer @ Talentrise Technokrate (Jan 2026 - Present)
  - Developed and maintained scalable RESTful APIs using Node.js and Express.js,  improving API response time by approximately
15% through optimized server-side logic`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email:roshannawkar2807@gmail.com
Phone:8080148343
Location: Pune Maharashtra`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/roshannawkar07", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume-2",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `
LinkedIn: /in/roshan-nawkar
`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"roshannawkar:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
