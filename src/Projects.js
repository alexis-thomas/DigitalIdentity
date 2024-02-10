import {Button, Title} from "@mantine/core";

var w = document.documentElement.clientWidth || window.innerWidth;

function Projects() {
    let projects = [
        {
            name: "Giftruly - AI Gift Finder",
            linkName:
                "https://giftruly.com",
            date: "march 2023 - Present",
            description:
                "We all know the struggle: whether it's for Christmas, Valentine's Day, or your best friend's housewarming, finding that ideal present can be tough. That's why we built Giftruly, to make sure that every gift you choose is a true reflection of your care and consideration.\n" +
                "\n" +
                "Here’s what makes Giftruly special:\n" +
                "\n" +
                "🤖 Personalized AI Recommendations: Our AI understands personalities and occasions, curating gift suggestions that hit the right note every time.\n" +
                "\n" +
                "🎉 For Every Occasion: From your niece’s graduation to your boss’s retirement, Giftruly has got you covered.\n" +
                "\n" +
                "🕒 Time-Saver: Spend less time searching and more time celebrating, as Giftruly swiftly presents you with a selection of thoughtful gifts.\n" +
                "\n" +
                "✨ User-Friendly: Available as both a mobile app and a website, Giftruly is always at your fingertips, ready to assist.",
            image: "giftruly.png",
        },
    ];

    return (
        <div className="project">
            <Title style={{ paddingBottom: "1em" }} order={1}>
                Projects
            </Title>
            {projects.map((article) => (
                <Project
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

function Project(props) {
    return (
        <div className="project-container">
            {props.image && (
                <div className="project-image">
                    <Image alt={props.name} src={props.image} background={null} />
                </div>
            )}
            <div className="project-left-side">
                <div className="project-title">{props.name}</div>
                <div className="project-date">
                    <b>{props.rank}</b> {"" + props.date }
                </div>
                <div className="project-description">{props.description}</div>
            </div>
            <div className="project-buttons">
            <Button type="submit">
                <a href={"https://giftruly.com"} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    Visit the website
                </a>
            </Button>
            </div>
        </div>
    );
}

export function Image(props) {
    return (
        <div
            className="project-img-container"
            style={{ backgroundColor: `${props.background && "white"}` }}
        >
            <img
                src={props.src}
                style={{
                    width: `${w > 480 ? "100%" : "3.5em"}`,
                    height: `${w > 480 ? "100%" : "3.5em"}`,
                }}
                className="project-img"
                alt={props.name}
            />
        </div>
    );
}
export default Projects;
