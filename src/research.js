import { Card, Image, Text, Badge, Button, Group, Title, Grid } from "@mantine/core";

function Research() {
  let article = [
    {
      title: "Neural networks are actually cool",
      description: "13 reasons why neural networks are cool and much much more.",
      date: "2021-01-01",
      image: "https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0%2C22%2C7500%2C5591&q=45&auto=format&w=926&fit=clip",
      journal: "Science",
      authors: ["Nathan Doumèche", "Alexis Thomas"]
    },
    {
      title: "Katy Perry new album leaks",
      description: "Katy Perry's new album is leaked and it's actually pretty good.",
      date: "2021-02-03",
      image:"https://parismatch.be/app/uploads/2020/12/katy_perry-1100x715.jpg",
      journal: "Neurips",
      authors: ["Nathan Doumèche", "Alexis Thomas"]}
,
{
    title:"Top 10 most horrifying creatures",
    description:"The unfortunate truth about the most horrifying creatures on earth.",
    date:"2021-03-04",
    image:"https://www.tepapa.govt.nz/sites/default/files/exquisite-corpse.jpg",
    journal:"Picsou Magazine",
    authors:["Nathan Doumèche", "Alexis Thomas"]
}
]
  return (
    <div className="research">
      <Title style={{paddingBottom:"1em"}} order={2}>My articles</Title>
      {article.map((article) => <CardExample2 title={article.title} text={article.description} image={article.image} date={article.date} journal={article.journal} authors={article.authors}
       />)}    </div>
  );
}

function CardExample() {
  return (
    <div className="card-container">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </div>
  );
}

function CardExample2(props) {
  let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  return (
    <div className="card-container">
        <div className="article-image-container"           style={{backgroundImage: 'url("'+props.image+'")'}}
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
        <div className="article-date" >{props.date} - <b>{props.journal}</b> - <b>{props.authors.join(", ")}</b></div>
        <div className="article-journal" >
        </div>
        <div className="article-description">{props.text}</div>

      </div>
      <div className="article-button">
          <Button size="md" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Read Article</Button>
        </div>
        </div>
    </div>
  );
}

export default Research;
