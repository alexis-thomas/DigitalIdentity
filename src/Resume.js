import { Timeline, Text, Title, Avatar } from "@mantine/core";

function Resume() {
  var w = document.documentElement.clientWidth || window.innerWidth;
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
      logo: "./assets/mines.png",
    },
    {
      name: "SL",
      date: "janv. 2018 - sept. 2022",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
      logo: "./assets/mines.png",
    },
  ];

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

  return (
    <div className="resume">
      <div style={{ paddingBottom: "1.5em" }}>
        <Text size={30} weight={700} color="">
          Education
        </Text>
      </div>
      <Timeline active={4} lineWidth={2} bulletSize={w > 480 ? 70 : 60}>
        {formation_timelines}
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
