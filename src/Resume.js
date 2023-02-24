import { Timeline, Text, Title, Avatar } from "@mantine/core";

function Resume() {
  var w = document.documentElement.clientWidth || window.innerWidth;
  let experiences = [
    {
      name: "EDF R&D",
      date: "sept. 2022 - dec. 2025",
      description:
        "Research scientist in Machine Learning applied to forecasting the French electricity load",
      logo: "./assets/edf.jpg",
    },
  ];

  let formations = [
    {
      name: "Mines Paris",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "./assets/mines.png",
    },
    {
      name: "ULM",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "./assets/ulm.jpg",
    },
    {
      name: "LLG",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "./assets/llg.jpg",
    },
    {
      name: "SL",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "./assets/saint_louis.webp",
    },
  ];

  let certificates = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      date: "feb. 2023",
      description: "Certifies the ability to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
      logo: "./assets/aws_certificate.png",
    }
  ]

  let experiences_timelines = experiences.map((experience) => (
    <Timeline.Item
      bullet={
        <Avatar
          radius={w > 480 ? 70 : 60}
          size={w > 480 ? 70 : 60}
          src={require(`${experience.logo}`)}
          variant="filled"
        />
      }
      title={<CustomTitle text={experience.name} />}
    >
      <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
        <Text color="dimmed" size="sm">
          {experience.date}
        </Text>
        <Text>{experience.description}</Text>
      </div>
    </Timeline.Item>
  ));

  let formation_timelines = formations.map((formation) => (
    <Timeline.Item
      bullet={
        <Avatar
          radius={w > 480 ? 70 : 60}
          size={w > 480 ? 70 : 60}
          src={require(`${formation.logo}`)}
          variant="filled"
        />
      }
      title={<CustomTitle text={formation.name} />}
    >
      <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
        <Text color="dimmed" size="sm">
          {formation.date}
        </Text>
        <Text>{formation.description}</Text>
      </div>
    </Timeline.Item>
  ));

  let certificates_timelines = certificates.map((certificate) => (
    <Timeline.Item
      bullet={
        <Avatar
          radius={w > 480 ? 70 : 60}
          size={w > 480 ? 70 : 60}
          src={require(`${certificate.logo}`)}
          variant="filled"
        />
      }
      title={<CustomTitle text={certificate.name} />}
    >
      <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
        <Text color="dimmed" size="sm">
          {certificate.date}
        </Text>
        <Text>{certificate.description}</Text>
      </div>

    </Timeline.Item>
  ));

  return (
    <div className="resume">
      <div style={{ paddingBottom: "1.5em" }}>
        <Text size={30} weight={700} color="" className="section-container">
          Work experience
        </Text>
      </div>
      <Timeline active={4} lineWidth={2} bulletSize={w > 480 ? 70 : 60}>
        {experiences_timelines}
      </Timeline>
      <div style={{ paddingBottom: "1.5em", paddingTop: "1.5em" }}>
        <Text size={30} weight={700} color="" className="section-container">
          Education
        </Text>
      </div>
      <Timeline active={4} lineWidth={2} bulletSize={w > 480 ? 70 : 60}>
        {formation_timelines}
      </Timeline>
      <div style={{ paddingBottom: "1.5em", paddingTop: "1.5em" }}>
        <Text size={30} weight={700} color="" className="section-container">
          Certificates
        </Text>
      </div>
      <Timeline active={4} lineWidth={2} bulletSize={w > 480 ? 70 : 60}>
        {certificates_timelines}
      </Timeline>
    </div>
  );
}

function CustomTitle(props) {
  return (
    <div className="title-container">
      <Text fw={700}>{props.text}</Text>
    </div>
  );
}

export default Resume;
