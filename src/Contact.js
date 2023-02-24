import "./Contact.css"
import {
  SiMaildotru,
  SiLinkedin} from "react-icons/si";
import { Card, Image, Text, Badge, Button, Group, Title, Grid } from "@mantine/core";


// Function that displays all my contact details and social media accounts
function Contact() {
  return (
    <div className="contact">
      <Title order={2}>Contact</Title>

      <div class="details">
<SiMaildotru className="details-icon" size={20}/>
      <a href="mailto: nathan@doumdoum.fr" className="details-value">nathan@doumdoum.fr</a>
      <SiLinkedin className="details-icon"  size={20}/>
      <a href="https://linkedin.fr/nathou" className="details-value">https://linkedin.fr/nathou</a>
      </div>
    </div>
  );
}

export default Contact;
