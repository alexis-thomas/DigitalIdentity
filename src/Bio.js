import {
  SiGithub,
  SiGitlab,
  SiGooglescholar,
  SiLinkedin,
  SiResearchgate,
} from "react-icons/si";
import { IconContext } from "react-icons";
import Photo from "./assets/alexis.jpg";
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
      <img src={Photo} alt="alexis" className="image" />
      <Title>Alexis Thomas</Title>
      <div className="bio__content">
        <div className="app-logos">
          <a
            aria-label="LinkedIn"
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alexis-thomas11/"
          >
            <SiLinkedin size={30} />
          </a>
          {/* <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGooglescholar size={30} />
          </a> */}
          {/* <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.researchgate.net/profile/Nathan-Doumeche"
          >
            <SiResearchgate size={30} />
          </a> */}
          <a
            aria-label="Github"
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alexis-thomas"
          >
            <SiGithub size={30} />
          </a>

          {/* <a
            className="app-logo"
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            <SiGitlab size={30} />
          </a> */}
        </div>
        <div className="bio-paragraph">
          <div>Welcome to my website!</div>
          <div>
            I am a Mines Paris graduate and a Software Development Engineer at
            Amazon, where I have the opportunity to work on a wide range of
            challenging projects.
          </div>
          <div>
            My passion for mathematics, computer science, and software
            development started during my studies at Mines Paris, where I had
            the chance to take advanced courses in these fields. Since then, I
            have developed full-stack development skills in Python, Java, and
            TypeScript, and gained project management experience in large
            companies.
          </div>
          <div>
            {" "}
            What fascinates me most these days are cloud technologies and
            especially AWS. I enjoy working on complex cloud architectures and
            leveraging cloud services to build innovative solutions that solve
            real-world problems.
          </div>
          <div>
            In my free time, I enjoy learning about emerging technologies and
            exploring new ideas. I'm always looking for ways to improve my
            skills and stay up-to-date with the latest trends in software
            development. Among my tech projects, I recently built prototypes for
            a social network website and a clothes delivery mobile app.
          </div>
          <div>
            Thank you for visiting my website. I look forward to connecting with
            you soon!
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-title">Skills</div>

        <div className="skills">
          {skills.map((skill) => (
            <Skill
              name={skill.name}
              logo={skill.logo}
              id={skills.indexOf(skill)}
              key={skill.name}
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
        gradient={{ from: "indigo.4", to: "cyan.2", deg: 45 }}
      >
        {props.name}
      </Text>
    </div>
  );
}

export default Bio;
