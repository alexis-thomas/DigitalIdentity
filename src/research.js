import { ActionIcon, Title } from "@mantine/core";
import { IconDownload, IconLink } from "@tabler/icons-react";
import { SiGithub } from "react-icons/si";

var w = document.documentElement.clientWidth || window.innerWidth;

function Research() {
  let articles = [
    {
      title: "Neural networks are actually cool",
      date: "2021",
      journal: "Science",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
      pdf: "https://arxiv.org/pdf/2006.08442.pdf",
      github: "https://www.google.com",
    },
    {
      title: "Katy Perry new album leaks",
      date: "2021",
      journal: "Neurips",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
    {
      title: "Top 10 most horrifying creatures",
      date: "2021",
      journal: "Picsou Magazine",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
  ];

  let talks = [
    {
      title: "Signed Taylor expansion and applications to machine learning",
      date: "2021",
      conf: "GDR TRAG - Signatures and rough paths for machine learning",
      place: "Institut Henri Poincaré - Paris- France",
      link: "https://young-trag-2021.sciencesconf.org/",
    },
  ];

  let lectures = [
    {
      title: "Partial differential equations in Physics",
      date: "2021",
      place: "Ecole Normale Supérieure de Paris (Ulm) - PSL University",
      level: "Highscool TalENS programme",
    },
  ];
  return (
    <div className="research">
      {/*<Title style={{ paddingBottom: "1em" }} order={1}>
        Peer-reviewed articles
      </Title>
      {articles.map((article) => (
        <Article
          title={article.title}
          date={article.date}
          journal={article.journal}
          authors={article.authors}
          lienPdf={article.pdf}
          lienGithub={article.github}
        />
      ))}*/}

      <Title style={{ paddingTop: "1em", paddingBottom: "1em" }} order={1}>
        Talks
      </Title>
      {talks.map((talk) => (
        <Talk
          title={talk.title}
          date={talk.date}
          conf={talk.conf}
          place={talk.place}
          lienPdf={talk.pdf}
          lienConf={talk.link}
        />
      ))}

      <Title style={{ paddingTop: "1em", paddingBottom: "1em" }} order={1}>
        Teaching
      </Title>
      {lectures.map((lecture) => (
        <Teaching
          title={lecture.title}
          date={lecture.date}
          level={lecture.level}
          place={lecture.place}
        />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.title}</div>
        <div className="research-date">
          {"  "}
          {props.authors.join(", ")} ({props.date}) in <i>{props.journal}</i>
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
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Talk(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.conf}</div>
        <div className="research-date">
          {"  "}
          <i>{props.title}</i> ({props.date}), {props.place}
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienConf ? (
          <a target="_blank" href={props.lienConf}>
            <IconLink size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf}>
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function Teaching(props) {
  return (
    <div className="research-container">
      <div className="research-left-side">
        <div className="research-title">{props.title}</div>
        <div className="research-date">
          <i>{props.level}</i> ({props.date}), {props.place}
        </div>
      </div>
      <div
        className="research-right-side"
        style={{
          flexDirection: `${w > 480 ? "row" : "column"}`,
        }}
      >
        {props.lienConf ? (
          <a target="_blank" href={props.lienConf}>
            <IconLink size={30} />
          </a>
        ) : null}
        {props.lienPdf ? (
          <a target="_blank" href={props.lienPdf}>
            <IconDownload size={30} />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Research;
