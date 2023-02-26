import {
  SiGithub,
  SiGitlab,
  SiGooglescholar,
  SiLinkedin,
  SiResearchgate,
} from "react-icons/si";
import { IconContext } from "react-icons";
import Photo from "./assets/nathou.jpeg";
import { ReactComponent as Python } from "./assets/python.svg";
import { ReactComponent as React } from "./assets/react.svg";
import { ReactComponent as AWS } from "./assets/aws.svg";
import { ReactComponent as Docker } from "./assets/docker.svg";
import { ReactComponent as Git } from "./assets/git.svg";
import { ReactComponent as Linux } from "./assets/linux.svg";
import { ReactComponent as SQL } from "./assets/sql.svg";
import { ReactComponent as TypeScript } from "./assets/typescript.svg";
import { ReactComponent as Java } from "./assets/java.svg";
import { Text, Title } from "@mantine/core";

const icons = [Python, React, AWS, Docker, Git, Linux, SQL, TypeScript, Java];

let skills = [
  {
    name: "Python",
  },
  {
    name: "react.js",
  },
  {
    name: "AWS",
  },
  {
    name: "Docker",
  },
  {
    name: "Git",
  },
  {
    name: "Linux",
  },
  {
    name: "SQL",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Java",
  },
];

// React function for biography
function Bio() {
  return (
    <div className="bio">
      <img src={Photo} alt="nathou" className="image" />
      <div className="bio__content">
        <h1 className="bio__title">About Me</h1>
        <div className="app-logos">
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alexis-thomas11/"
          >
            <SiLinkedin size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGooglescholar size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/profile/Nathan-Doumeche"
          >
            <SiResearchgate size={30} />
          </a>
          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Elial111"
          >
            <SiGithub size={30} />
          </a>

          <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGitlab size={30} />
          </a>
        </div>
        <div className="bio-paragraph">
          I am a software engineer who is passionate about building software
          that improves the lives of others. I have experience in web
          development, mobile development, and machine learning. I enjoy
          learning new technologies and applying them to create innovative
          solutions.
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-title">Skills</div>

        <div class="skills">
          {skills.map((skill) => (
            <Skill
              name={skill.name}
              logo={skill.logo}
              id={skills.indexOf(skill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill(props) {
  const Icon = icons[props.id];
  return (
    <div className="skill">
      <Icon height={40} width={40} />
      {/* <div className="skill-name">{props.name}</div> */}
      <Text
        fz="sm"
        c="dimmed"
        variant="gradient"
        gradient={{ from: "indigo.9", to: "cyan.2", deg: 45 }}
      >
        {props.name}
      </Text>
    </div>
  );
}

export default Bio;
