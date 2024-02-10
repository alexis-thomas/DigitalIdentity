import { Timeline, Text, Title, Avatar, List, Spoiler } from "@mantine/core";

var w = document.documentElement.clientWidth || window.innerWidth;

function Resume() {
  let experiences = [
    {
      name: "Amazon",
      job: "Software Development Engineer II",
      date: "since march. 2022",
      logo: "amazon.png",
      description: [
        "Responsible for software architecture, development, and engineering within a research team providing long-term vision to accelerate European delivery speed and optimize the Amazon delivery network.",
        "Main projects: ",
        "   - Building a platform enabling one-click execution of operational research model workflows, achieving cost-effective scalability to handle thousands of concurrent executions without pre-provisioned servers.\n",
        "   - Input validation, sanitization, and infrastructure as code solutions, reducing production time for models and enhancing maintenance efficiency.",
        "   - Data visualization platform with hundreds of internal users, integrating automated reporting, data pipelines, and big data processing.",
        "   - Implemented CI/CD pipelines leveraging containerization to deploy operational research models on scalable serverless architectures.",
        "Stack: Python, Java, PostgreSQL, and AWS services (EC2, Lambda, ECS, Fargate, Glue, S3, RDS, Redshift…)"
      ],
    },
    {
      name: "BMW",
      job: "Finance Project Manager",
      date: "feb. 2022 - july. 2021",
      description: [
        "Collaborated with project managers to frame projects and monitored progress to completion.",
        "Provided financial and human resources estimates, and identified risks and opportunities for the BMW France project portfolio.",
      ],
      logo: "bmw.png",
    },
    // {
    //   name: "EDF R&D",
    //   job: "Research Scientist",
    //   date: "sept. 2022 - dec. 2025",
    //   description:
    //     "Research scientist in Machine Learning applied to forecasting the French electricity load",
    //   logo: "edf.png",
    // },
    {
      name: "Amazon Web Services",
      job: "Software Development Engineer Intern",
      date: "june. 2020 - dec. 2020",
      description: [
        "Developed a new service allowing customers to adjust internal tool configurations in real-time.",
        "Led end-to-end project management, including scoping, design, implementation, and testing.",
        "Utilized Java & AWS for backend development and React for frontend design.",
      ],

      logo: "aws.png",
    },
  ];

  let formations = [
    {
      name: "Mines Paris - Engineering School",
      job: "Master degree with major in computer science (Diplôme d’ingénieur civil des Mines de Paris)",
      date: "2018 - 2022",
      description:
        "One of the top three French engineering schools. Advanced courses in Mathematics and Computer Science.",
      logo: "mines.png",
    },
    {
      name: "Lycée Saint-Louis",
      date: "2016 - 2018",
      description:
        "Two-year prep school preparing the French national competitive exams to engineering schools.",
      logo: "saint_louis.png",
    },
  ];

  let certificates = [];

  let experiences_timelines = experiences.map((experience) =>
    experience.steps ? (
      [
        <Timeline.Item
          bulletSize={w > 480 ? 70 : 60}
          radius="md"
          bullet={
            <Logo
              name={experience.name}
              src={experience.logo}
              background={true}
            />
          }
          title={<CustomTitle text={experience.name} />}
          key={experience.name}
        >
          <ItemText
            title={experience.job}
            date={experience.date}
            description={experience.description}
            spoiler={true}
          />
        </Timeline.Item>,

        experience.steps.map((step) => (
          <Timeline.Item lineVariant="dotted" bulletSize={25} key={step.job}>
            <ItemText
              title={step.job}
              date={step.date}
              description={step.description}
              spoiler={true}
            />
          </Timeline.Item>
        )),
      ]
    ) : (
      <Timeline.Item
        lineVariant="dotted"
        bulletSize={w > 480 ? 70 : 60}
        bullet={
          <Logo
            name={experience.name}
            src={experience.logo}
            background={true}
          />
        }
        title={<CustomTitle text={experience.name} />}
        key={experience.name}
      >
        <ItemText
          title={experience.job}
          date={experience.date}
          description={experience.description}
          spoiler={true}
        />
      </Timeline.Item>
    )
  );

  let formation_timelines = formations.map((formation) => (
    <Timeline.Item
      bullet={
        <Logo name={formation.name} src={formation.logo} background={true} />
      }
      bulletSize={w > 480 ? 70 : 60}
      title={<CustomTitle text={formation.name} />}
      key={formation.name}
    >
      <ItemText
        title={formation.job}
        date={formation.date}
        description={formation.description}
      />
    </Timeline.Item>
  ));

  return (
    <div className="resume">
      <div style={{ paddingBottom: "1.5em" }}>
        <Title order={1} color="" className="section-container">
          Work experience
        </Title>
      </div>
      <Timeline
        color="gray"
        active={4}
        lineWidth={4}
        bulletSize={w > 480 ? 70 : 60}
      >
        {experiences_timelines}
      </Timeline>
      <div style={{ paddingBottom: "1.5em", paddingTop: "1.5em" }}>
        <Title order={1} color="" className="section-container">
          Education
        </Title>
      </div>
      <Timeline
        color="gray"
        active={4}
        lineWidth={4}
        bulletSize={w > 480 ? 70 : 60}
      >
        {formation_timelines}
      </Timeline>
    </div>
  );
}

function ItemText(props) {
  return (
    <div
      style={{
        paddingLeft: "2em",
        paddingBottom: "1em",
        boxSizing: "border-box",
      }}
    >
      <Title order={5}>{props.title}</Title>
      <Text color="dimmed" size="sm">
        {props.date}
      </Text>
      <Spoiler
        maxHeight={props.spoiler && w < 480 ? 0 : 90}
        showLabel="Show more"
        hideLabel="Hide"
      >
        {Array.isArray(props.description) ? (
          <div className="descriptions">
            {props.description.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : (
          <Text>{props.description}</Text>
        )}
      </Spoiler>
    </div>
  );
}

export function Logo(props) {
  return (
    <div
      className="resume-img-container"
      style={{ backgroundColor: `${props.background && "white"}` }}
    >
      <img
        src={props.src}
        style={{
          width: `${w > 480 ? "4em" : "3.5em"}`,
          height: `${w > 480 ? "4em" : "3.5em"}`,
        }}
        className="resume-img"
        alt={props.name}
      />
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
