import { Timeline, Text, Title, Avatar, List } from "@mantine/core";

function Resume() {
  var w = document.documentElement.clientWidth || window.innerWidth;
  let experiences = [
    {
      name: "Amazon",
      job: "Software Development Engineer",
      date: "since march. 2022",
      logo: "amazon.png",
      description: [
        "As the only Software Development Engineer of a research team I own the subjects related to architecture, development and engineering.",
        "I develop various tools related to input processing, data pipelines & automated deployments.",
        "I am building CI/CD workflows to deploy operational research models on scalable architectures using serverless cloud technologies & containerization.",
        "Stack: ...",
      ],
      steps: [
        {
          date: "march. 2022 - june. 2022",
          job: "Software Development Engineer",
          description: [
            "Responsible for all the technical aspects of the team.",
            "I design, implement and maintain software and the AWS infrastructure in order to provide technologies to accelerate and simplify how the team and its stakeholders can understand the European delivery speed.",
            "One of our main products is a Data visualization platform with hundreds of internal users which includes operational research models, automated reporting, Data pipelines and Big Data processing.",
          ],
        },
      ],
    },
    {
      name: "BMW",
      job: "Finance Project Manager",
      date: "feb. 2022 - july. 2021",
      description: [
        "Framing of projects with the project managers and monitoring of their progress until their completion.",
        "Financial and human resources estimates as well as risks and opportunities for the entire BMW France project portfolio.",
      ],
      logo: "bmw.png",
    },
    {
      name: "EDF R&D",
      job: "Research Scientist",
      date: "sept. 2022 - dec. 2025",
      description:
        "Research scientist in Machine Learning applied to forecasting the French electricity load",
      logo: "edf.png",
    },
    {
      name: "Amazon Web Services",
      job: "Software Development Engineer Intern",
      date: "june. 2020 - dec. 2020",
      description: [
        "Creation of a new service allowing our customers to change configuration of other internal tools at runtime.",
        "Responsible for the full project: scope, design, implementation and testing.",
        "Development of a Java backend and a React frontend.",
      ],

      logo: "aws.jpeg",
    },
  ];

  let formations = [
    {
      name: "Mines Paris",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "mines.png",
    },
    {
      name: "ULM",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "ulm.jpg",
    },
    {
      name: "LLG",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "llg.jpg",
    },
    {
      name: "SL",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "saint_louis.webp",
    },
  ];

  let certificates = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      date: "feb. 2023",
      description:
        "Certifies the ability to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
      logo: "./assets/aws_certificate.png",
    },
  ];

  let experiences_timelines = experiences.map((experience) =>
    experience.steps ? (
      [
        <Timeline.Item
          bulletSize={w > 480 ? 70 : 60}
          radius="md"
          bullet={<Logo src={experience.logo} />}
          title={<CustomTitle text={experience.name} />}
        >
          <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
            <Title order={5}>{experience.job}</Title>
            <Text color="dimmed" size="sm">
              {experience.date}
            </Text>
            {Array.isArray(experience.description) ? (
              <List listStyleType="disc">
                {experience.description.map((item) => (
                  <List.Item>{item}</List.Item>
                ))}
              </List>
            ) : (
              <Text>{experience.description}</Text>
            )}
          </div>
        </Timeline.Item>,

        experience.steps.map((step) => (
          <Timeline.Item lineVariant="dotted">
            <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
              <Title order={5}>{experience.job}</Title>
              <Text color="dimmed" size="sm">
                {step.date}
              </Text>
              {Array.isArray(step.description) ? (
                <List listStyleType="disc">
                  {step.description.map((item) => (
                    <List.Item>{item}</List.Item>
                  ))}
                </List>
              ) : (
                <Text>{step.description}</Text>
              )}
            </div>
          </Timeline.Item>
        )),
      ]
    ) : (
      <Timeline.Item
        lineVariant="dotted"
        bulletSize={w > 480 ? 70 : 60}
        bullet={<Logo src={experience.logo} />}
        title={<CustomTitle text={experience.name} />}
      >
        <div style={{ paddingLeft: "2em", paddingBottom: "1em" }}>
          <Title order={5}>{experience.job}</Title>
          <Text color="dimmed" size="sm">
            {experience.date}
          </Text>
          {Array.isArray(experience.description) ? (
            <List listStyleType="disc">
              {experience.description.map((item) => (
                <List.Item>{item}</List.Item>
              ))}
            </List>
          ) : (
            <Text>{experience.description}</Text>
          )}
        </div>
      </Timeline.Item>
    )
  );

  let formation_timelines = formations.map((formation) => (
    <Timeline.Item
      bullet={<Logo src={formation.logo} />}
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

  function Logo(props) {
    return (
      <div className="resume-img-container" style={{}}>
        <img
          src={props.src}
          style={{
            width: `${w > 480 ? "4em" : "3.5em"}`,
            height: `${w > 480 ? "4em" : "3.5em"}`,
          }}
          className="resume-img"
        />
      </div>
    );
  }

  return (
    <div className="resume">
      <div style={{ paddingBottom: "1.5em" }}>
        <Text size={30} weight={700} color="" className="section-container">
          Work experience
        </Text>
      </div>
      <Timeline color="gray" active={4} lineWidth={4}>
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
