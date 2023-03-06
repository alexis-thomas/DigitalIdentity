import { Timeline, Text, Title, Avatar, List, Spoiler } from "@mantine/core";

var w = document.documentElement.clientWidth || window.innerWidth;

function Resume() {
  let experiences = [
    {
      name: "Amazon",
      job: "Software Development Engineer",
      date: "since march. 2022",
      logo: "amazon.png",
      description: [
        "Owning all aspects of software development for a research team, including architecture, development, and engineering.",
        "Developing a scalable and highly customizable solution to run a cascade of services in Docker containers with parallelization and feedback loops.",
        "Working on multiple tools for input processing, data pipelines, and automated deployments.",
        "Built CI/CD workflows to deploy operational research models on scalable architectures using serverless cloud technologies and containerization.",
        "Technologies used: Python, Java, Postgres, AWS computing (EC2, Lambda, ECS, Fargate), and data storage/processing (Glue, S3, RDS, Redshift, DynamoDB, Glue).",
      ],
      steps: [
        {
          date: "march. 2022 - june. 2022",
          job: "Software Development Engineer Intern",
          description: [
            "Responsible for all technical aspects of the team, including designing, implementing, and maintaining software and AWS infrastructure to support European delivery speed.",
            "Contributed to the development of a data visualization platform used by hundreds of internal users, featuring operational research models, automated reporting, data pipelines, and big data processing.",
          ],
        },
      ],
    },
    {
      name: "BMW",
      job: "Finance Project Manager",
      date: "feb. 2022 - july. 2021",
      description: [
        "Collaborated with project managers to frame projects and monitored their progress to completion.",
        "Provided financial and human resource estimates, identified risks and opportunities, and managed the entire BMW France project portfolio.",
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
        "Created a new service that enabled customers to change the configuration of internal tools at runtime.",
        "Responsible for the entire project lifecycle, including scoping, design, implementation, and testing.",
        "Developed a Java backend and a React frontend.",
      ],

      logo: "aws.png",
    },
  ];

  let formations = [
    {
      name: "Mines Paris",
      date: "2018 - 2022",
      description:
        "Top three French engineering schools. Advanced courses in mathematics and algorithms. Major in computer science.",
      logo: "mines.png",
    },
    // {
    //   name: "ULM",
    //   date: "janv. 2018 - sept. 2022",
    //   description:
    //     "Master's Degree in Science and Executive Engineering, Computer Science",
    //   logo: "ulm.jpg",
    // },
    // {
    //   name: "LLG",
    //   date: "janv. 2018 - sept. 2022",
    //   description:
    //     "Master's Degree in Science and Executive Engineering, Computer Science",
    //   logo: "llg.jpg",
    // },
    {
      name: "Saint-Louis",
      date: "2016 - 2018",
      description:
        "Two-year undergraduate courses for entrance exams to the top French engineering schools.",
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
          bullet={<Logo src={experience.logo} background={true} />}
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
        bullet={<Logo src={experience.logo} background={true} />}
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
      bullet={<Logo src={formation.logo} background={true} />}
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
