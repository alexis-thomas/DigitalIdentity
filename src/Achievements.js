import { Title } from "@mantine/core";
import { IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";
import { Logo } from "./Resume";

var w = document.documentElement.clientWidth || window.innerWidth;

function Achievements() {
  let achievements = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      linkName:
        "https://www.credly.com/badges/40bbdc2f-2c5c-416a-b3db-8612cda081da/linked_in?t=rqbref",
      date: "feb. 2023",
      description:
        "Certifies the ability to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
      image: "aws_certificate.png",
    },
    {
      name: "Smarter Mobility Data Challenge",
      linkName: "https://codalab.lisn.upsaclay.fr/competitions/7192",
      date: "2022",
      rank: "Rank 3",
      description:
        "I teamed up with Nathan Doumèche for this international data challenge on electric vehicle load forecasting organised by the Manifeste IA network of 16 industrial companies and the TAILOR European project on the scientific foundations for trustworthy AI.",
      github: "https://github.com/NathanDoumeche/Smart_mobility_challenge",
      image: "mobility_challenge.png",
    },
    // {
    //   name: "International Physics Olympiads",
    //   linkName: "https://ipho-unofficial.org/countries/FRA/individual",
    //   date: "2017",
    //   rank: "Bronze medal",
    //   description:
    //     "International challenge in both theoretical and experimental Physics for undergraduate students which held in Yogyakarta, Indonesia.",
    // },
    // {
    //   name: "Concours Général des Lycées",
    //   linkName:
    //     "https://www.education.gouv.fr/le-concours-general-des-lycees-et-des-metiers-un-prix-d-excellence-10022",
    //   date: "2016",
    //   rank: "Mention in Physics and Chemistry",
    //   description:
    //     "French national challenge in theoretical Physics and Chemistry organized by the French Ministry of Education for highscool students.",
    // },
    // {
    //   name: "Local Mathematics Olympiads",
    //   date: "2015",
    //   rank: "Rank 1",
    //   description:
    //     "French challenge in Mathematics organized by the French Ministry of Education and by the Animath association at the scale of the Académie de Nice for highscool students.",
    //   linkName:
    //     "https://www.pedagogie.ac-nice.fr/mathematiques/category/culture-mathematique/rallyes-et-concours/olympiades/",
    // },
  ];

  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={1}>
        Achievements
      </Title>
      {achievements.map((article) => (
        <Article
          name={article.name}
          date={article.date}
          rank={article.rank}
          description={article.description}
          lienPdf={article.linkName}
          lienGithub={article.github}
          image={article.image}
          key={article.name}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="research-container">
      {props.image && (
        <div className="research-image">
          <Logo src={props.image} background={null} />
        </div>
      )}
      <div className="research-left-side">
        <div className="research-title">{props.name}</div>
        <div className="research-date">
          <b>{props.rank}</b> {"(" + props.date + ") - "}{" "}
          <i>{props.description}</i>
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
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

export default Achievements;
