import { Title } from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

function Awards() {
  let awards = [
    {
      name: "Smarter Mobility Data Challenge",
      linkName: "https://codalab.lisn.upsaclay.fr/competitions/7192",
      date: "2022",
      rank: "Rank 3",
      description:
        "International data challenge on electric vehicules load forecasting organised by the Manifeste IA" +
        " network of 16 French industrials and the TAILOR european project on the scientific foundations for trustworthy AI.",
      github: "https://github.com/NathanDoumeche/Smart_mobility_challenge",
    },
    {
      name: "International Physics Olympiads",
      linkName: "https://ipho-unofficial.org/countries/FRA/individual",
      date: "2017",
      rank: "Bronze medal",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
    },
    {
      name: "Concours Général des Lycées",
      date: "2016",
      rank: "Mention in Physics and Chemistry",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
    },
    {
      name: "Local Mathematics Olympiads",
      date: "2015",
      rank: "Rank 1",
      description:
        "Master's Degree in Science and Executive Engineering, Computer Science",
    },
  ];

  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={1}>
        Awards
      </Title>
      {awards.map((article) => (
        <Article
          name={article.name}
          date={article.date}
          rank={article.rank}
          description={article.description}
          lienPdf={article.linkName}
          lienGithub={article.github}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.name}</div>
        <div className="research-date">
          <b>{props.rank}</b> {"(" + props.date + ") - "}{" "}
          <i>{props.description}</i>
        </div>
      </div>
      <div className="research-right-side">
        {props.lienGithub ? (
          <a target="_blank" href={props.lienGithub}>
            <SiGithub size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf}>
            <IconLink size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Awards;
