import "./Contact.css";
import { SiMaildotru, SiLinkedin } from "react-icons/si";
import { Title } from "@mantine/core";

// Function that displays all my contact details and social media accounts
function Contact() {
  return (
    <div className="contact">
      <Title order={1}>Contact</Title>

      <div class="details">
        Please contact me at{" "}
        <a
          href="mailto: alexis.thomasjutisz@gmail.com"
          className="details-value"
        >
          alexis.thomasjutisz@gmail.com
        </a>
        .
      </div>
    </div>
  );
}

export default Contact;
