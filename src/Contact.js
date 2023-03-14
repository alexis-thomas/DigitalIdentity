import "./Contact.css";
import { SiMaildotru, SiLinkedin } from "react-icons/si";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
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
import { notifications } from "@mantine/notifications";
async function sendEmail({ name, email, message }) {
  return fetch("https://api.alexisthomas.fr/api/contact", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    //   "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    // },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  });
}

// Function that displays all my contact details and social media accounts
function Contact() {
  let [loading, setLoading] = useState(false);

  async function submitForm(values) {
    setLoading(true);
    notifications.show({
      id: "lsend-message",
      loading: true,
      title: "Sending your message",
      message: "Please wait a few seconds...",
      autoClose: false,
      withCloseButton: false,
    });

    sendEmail(values)
      .then((response) => {
        if (response.ok) {
          notifications.update({
            id: "lsend-message",
            color: "teal",
            title: "Message sent successfully",
            message:
              "I received your message and will get back to you as soon as possible.",
            icon: <IconCheck size="1em" />,
            autoClose: 8000,
          });
          form.reset();
          setLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        notifications.update({
          id: "lsend-message",
          color: "red",
          title: "Message not sent",
          message: "An error occured while sending your message.",
          autoClose: 8000,
        });
        setLoading(false);
      });
  }

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) =>
        value.length <= 0 ? "Your name must not be empty" : null,
      message: (value) =>
        value.length <= 0 ? "The message must not be empty" : null,
    },
  });

  return (
    <div className="contact">
      <Title order={1}>Contact</Title>
      <form
        className="form-container"
        onSubmit={form.onSubmit(async (values) => await submitForm(values))}
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Firstname Lastname"
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
          minRows={8}
          maxRows={15}
          {...form.getInputProps("message")}
        />

        <Group position="right" mt="md">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default Contact;
