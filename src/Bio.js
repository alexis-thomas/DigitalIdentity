import {
  SiGithub,
  SiGitlab,
  SiGooglescholar,
  SiLinkedin,
  SiResearchgate,
} from "react-icons/si";
import { IconContext } from "react-icons";
import Photo from "./assets/nathou.jpeg";


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
        <p className="bio__paragraph">
          I am a software engineer who is passionate about building software
          that improves the lives of others. I have experience in web
          development, mobile development, and machine learning. I enjoy
          learning new technologies and applying them to create innovative
          solutions.
        </p>
      </div>
    </div>
  );
}

export default Bio;
