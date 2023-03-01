import "./Contact.css";
import { SiMaildotru, SiLinkedin } from "react-icons/si";
import {
  Title,
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// Function that displays all my contact details and social media accounts
function Contact() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="contact">
      <Title order={1}>Contact</Title>
      <form
        class="form-container"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <TextInput
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Textarea
          withAsterisk
          label="Message"
          placeholder=""
          {...form.getInputProps("message")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      {/* <div class="details">
        Please contact me at{" "}
        <a
          href="mailto: alexis.thomasjutisz@gmail.com"
          className="details-value"
        >
          alexis.thomasjutisz@gmail.com
        </a>
        .
      </div> */}
    </div>
  );
}

export default Contact;
