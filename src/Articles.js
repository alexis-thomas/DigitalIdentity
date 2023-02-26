import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Grid,
} from "@mantine/core";

import "./Articles.css";

function Articles() {
  let articles = [
    {
      title: "Neural networks are actually cool",
      description:
        "13 reasons why neural networks are cool and much much more.",
      date: "2021-01-01",
      image:
        "https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0%2C22%2C7500%2C5591&q=45&auto=format&w=926&fit=clip",
      journal: "Science",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
    {
      title: "Katy Perry new album leaks",
      description:
        "Katy Perry's new album is leaked and it's actually pretty good.",
      date: "2021-02-03",
      image:
        "https://parismatch.be/app/uploads/2020/12/katy_perry-1100x715.jpg",
      journal: "Neurips",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
    {
      title: "Top 10 most horrifying creatures",
      description:
        "The unfortunate truth about the most horrifying creatures on earth.",
      date: "2021-03-04",
      image:
        "https://www.tepapa.govt.nz/sites/default/files/exquisite-corpse.jpg",
      journal: "Picsou Magazine",
      authors: ["Nathan Doumèche", "Alexis Thomas"],
    },
  ];
  return (
    <div className="research">
      <Title style={{ paddingBottom: "1em" }} order={2}>
        My articles
      </Title>
      {articles.map((article) => (
        <CardExample2
          title={article.title}
          text={article.description}
          image={article.image}
          date={article.date}
          journal={article.journal}
          authors={article.authors}
        />
      ))}{" "}
    </div>
  );
}

function CardExample2(props) {
  return (
    <div className="card-container">
      <div
        className="article-image-container"
        style={{ backgroundImage: 'url("' + props.image + '")' }}
      >
        {/* <img
          // src={props.image}
          style={{backgroundImage: 'url("'+props.image+'")'}}
          className="article-image"
        /> */}
      </div>
      {/* <img className="article-image" src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"/> */}
      <div className="article-right-side">
        <div className="article-text">
          <div className="article-title">{props.title}</div>
          <div className="article-date">
            {props.date} - <b>{props.journal}</b> -{" "}
            <b>{props.authors.join(", ")}</b>
          </div>
          <div className="article-journal"></div>
          <div className="article-description">{props.text}</div>
        </div>
        <div className="article-button">
          <Button
            size="md"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Read Article
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
