// Single source of truth for everything personal on the site.
// Pages, structured data (JSON-LD), llms.txt and OG images all read from here.

export const SITE_URL = "https://alexisthomas.fr";

export const profile = {
  name: "Alexis Thomas",
  givenName: "Alexis",
  familyName: "Thomas",
  role: "Applied Scientist II",
  company: "Amazon",
  location: "London, United Kingdom",
  locality: "London",
  country: "GB",
  email: "contact@alexisthomas.fr",
  headline:
    "Applied Scientist at Amazon building demand forecasting systems for European logistics, and an engineer who ships AI products end to end.",
  shortBio:
    "I'm an Applied Scientist at Amazon in London, where I build the demand forecasts that Amazon uses to plan its European delivery network, from three-year capacity plans down to zip-code-level operations. Before moving into science I spent two and a half years as a software engineer at Amazon, building the serverless platforms that run our research models in production.",
  longBio: [
    "I studied mathematics and computer science at Mines Paris – PSL, one of France's top engineering schools, after two years of classes préparatoires at Lycée Saint-Louis.",
    "That double background, part scientist, part engineer, is how I work. I like problems where a good model only matters if it survives contact with production: messy data, hard business constraints, real users. At Amazon that means forecasting systems that hold up across 31 countries. On my own time it means designing, building and shipping apps to the App Store and Google Play.",
    "Outside of work you'll find me singing, at CrossFit, or building the next side project.",
  ],
  photoAlt: "Portrait of Alexis Thomas",
  social: {
    linkedin: "https://www.linkedin.com/in/alexis-thomas11/",
    github: "https://github.com/alexis-thomas",
    gitlab: "https://gitlab.com/alexis.thomasjutisz",
    scholar: "https://scholar.google.com/citations?user=pdpHNQUAAAAJ",
  },
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Full professional" },
    { name: "German", level: "Limited working" },
  ],
  knowsAbout: [
    "Time series forecasting",
    "Demand forecasting",
    "Hierarchical forecasting",
    "Machine learning",
    "Data science",
    "Statistical modeling",
    "Optimization",
    "Large language models",
    "Amazon Web Services",
    "Cloud architecture",
    "Serverless computing",
    "Infrastructure as code",
    "Python",
    "TypeScript",
    "Java",
    "React",
    "React Native",
  ],
};

export const highlights = [
  { value: "31", label: "countries covered by the long-term forecasting system I built" },
  { value: "99.7%", label: "business-constraint satisfaction across 10 marketplaces" },
  { value: "85K+", label: "AI recommendations served by Giftruly, one of 3 apps I built and shipped" },
];

export type Role = {
  title: string;
  start: string; // ISO yyyy-mm
  end?: string; // undefined = present
  location: string;
  summary?: string;
  bullets: string[];
  stack?: string[];
};

export type Employer = {
  company: string;
  url: string;
  logo: "amazon" | "aws" | "bmw";
  type?: string;
  roles: Role[];
};

export const experience: Employer[] = [
  {
    company: "Amazon",
    url: "https://www.amazon.jobs",
    logo: "amazon",
    roles: [
      {
        title: "Applied Scientist II",
        start: "2024-10",
        location: "London, UK",
        summary:
          "Demand forecasting for Amazon's European logistics network, feeding capacity planning and financial forecasting.",
        bullets: [
          "Built a **long-term demand forecasting system** for a 3-year planning horizon, combining optimization algorithms with statistical modeling to satisfy multiple business constraints across **10 marketplaces and 31 countries**, reaching **99.7% constraint satisfaction**.",
          "Developed a **short-term granular forecasting model** for 2-month operational horizons, using hierarchical neural networks and statistical time series models to predict demand at **zip-code level** with an average WAPE of about 3%.",
          "Led a **model evaluation programme** across statistical, machine learning and **time series foundation models**, and designed adaptive forecasting strategies that adjust automatically to different volatility regimes and market conditions.",
        ],
        stack: ["Python", "Hierarchical forecasting", "Neural networks", "Optimization", "Foundation models"],
      },
      {
        title: "Software Development Engineer II",
        start: "2023-12",
        end: "2024-09",
        location: "Paris, France",
        summary:
          "Led software architecture inside a research team working on the long-term vision for European delivery speed.",
        bullets: [
          "Owned architecture, development and engineering standards for a science team optimizing the Amazon delivery network in Europe.",
          "Engineered **long-term demand forecasting** pipelines with machine learning and statistical models at granular levels.",
          "Implemented **CI/CD pipelines** with containerization to deploy operational research models on scalable serverless architectures.",
        ],
        stack: ["Python", "Java", "ECS / Fargate", "Lambda", "SageMaker", "Docker", "Infrastructure as code"],
      },
      {
        title: "Software Development Engineer",
        start: "2022-03",
        end: "2023-12",
        location: "Paris, France",
        bullets: [
          "Built a platform for **one-click execution of operational research workflows**, scaling cost-effectively to **thousands of concurrent executions** with no pre-provisioned servers.",
          "Delivered input validation, sanitization and **infrastructure-as-code** tooling that cut the time to put models in production and made them easier to maintain.",
          "Built a **data visualization platform used by hundreds of internal users**, with automated reporting, data pipelines and big data processing.",
        ],
        stack: ["Python", "Java", "React", "PostgreSQL", "Glue", "Redshift", "S3", "RDS", "DynamoDB"],
      },
    ],
  },
  {
    company: "BMW Group France",
    url: "https://www.bmw.fr",
    logo: "bmw",
    type: "Internship",
    roles: [
      {
        title: "Finance Project Manager",
        start: "2021-02",
        end: "2021-07",
        location: "Paris, France",
        bullets: [
          "Worked with project managers to frame projects and track them to completion.",
          "Produced financial and staffing estimates and identified risks and opportunities across the BMW France project portfolio.",
        ],
      },
    ],
  },
  {
    company: "Amazon Web Services",
    url: "https://aws.amazon.com",
    logo: "aws",
    type: "Internship",
    roles: [
      {
        title: "Software Development Engineer Intern",
        start: "2020-06",
        end: "2020-12",
        location: "Dublin, Ireland",
        bullets: [
          "Built a new service that lets customers adjust internal tool configurations in real time.",
          "Owned the project end to end: scoping, design, implementation and testing.",
          "Java and AWS on the backend, React on the frontend.",
        ],
        stack: ["Java", "AWS", "React"],
      },
    ],
  },
];

export const education = [
  {
    school: "Mines Paris – PSL",
    url: "https://www.minesparis.psl.eu",
    logo: "mines" as const,
    degree: "Diplôme d'ingénieur civil des Mines (Master's degree), Mathematics & Computer Science",
    start: "2018",
    end: "2022",
    location: "Paris, France",
    note: "One of France's top three engineering schools. Advanced coursework in mathematics, machine learning and computer science.",
  },
  {
    school: "Lycée Saint-Louis",
    logo: "saint_louis" as const,
    degree: "Classes préparatoires aux grandes écoles (CPGE)",
    start: "2016",
    end: "2018",
    location: "Paris, France",
    note: "Two-year intensive programme preparing the national competitive exams for France's engineering schools.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024-05",
    expires: "2027-05",
    url: "https://www.credly.com/badges/ec115f20-7880-4b9d-bdcc-bdb29e22bd5a",
  },
];

export const publications = [
  {
    title: "Forecasting Electric Vehicle Charging Station Occupancy: Smarter Mobility Data Challenge",
    venue: "Journal of Data-centric Machine Learning Research (DMLR)",
    year: "2024",
    authors:
      "Y. Amara-Ouali, Y. Goude, N. Doumèche, P. Veyret, A. Thomas, D. Hebenstreit, T. Wedenig, A. Satouf, A. Jan, Y. Deleuze, P. Berhaut, S. Treguer, T. Phe-Neau",
    summary:
      "Results of the Smarter Mobility Data Challenge: forecasting the occupancy of 91 EV charging stations in Paris over seven months. Our team finished 3rd, and the paper shows hierarchical forecasting captures occupancy patterns well despite missing values and spatio-temporal correlations.",
    links: [
      { label: "PDF", url: "https://data.mlr.press/assets/pdf/v01-16.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2306.06142" },
      { label: "Code", url: "https://github.com/NathanDoumeche/Smart_mobility_challenge" },
    ],
    public: true,
  },
];

export const awards = [
  {
    title: "3rd place, Smarter Mobility Data Challenge",
    date: "2023-03",
    org: "Manifeste IA (Air Liquide, Airbus, EDF, Renault, Safran, Thales, TotalEnergies…) & TAILOR EU project",
    description:
      "The first European data science challenge organised by Manifeste IA, a network of 16 industrial companies. With Nathan Doumèche, I forecast the availability of electric vehicle charging stations in Paris. Our work was reviewed by a jury including Cédric Villani, Marc Schoenauer and Jean-Michel Poggi.",
    url: "https://codalab.lisn.upsaclay.fr/competitions/7192",
  },
];

export const skills = [
  {
    group: "Forecasting & ML",
    items: ["Time series forecasting", "Hierarchical forecasting", "Neural networks", "Foundation models for time series", "Statistical modeling", "Optimization", "Model evaluation"],
  },
  {
    group: "AI engineering",
    items: ["LLM applications", "Amazon Bedrock", "Embeddings & semantic search"],
  },
  {
    group: "Cloud & infrastructure",
    items: ["AWS (Lambda, ECS/Fargate, SageMaker, Glue, Redshift, DynamoDB, S3, CloudFront)", "AWS CDK", "Docker", "CI/CD pipelines", "Serverless architecture", "Observability"],
  },
  {
    group: "Languages & frameworks",
    items: ["Python", "TypeScript", "Java", "SQL", "React", "React Native / Expo", "Next.js", "Spark"],
  },
];

export const interests = ["Singing", "CrossFit", "Gaming", "Side projects"];

// Career timeline for the hero chart. Dates are yyyy-mm; `end` omitted = ongoing.
export type TimelineBar = {
  lane: "education" | "industry" | "products";
  row?: number;
  label: string;
  short?: string;
  detail: string;
  start: string;
  end?: string;
  href?: string;
  color?: string;
};
export type TimelineMark = { label: string; date: string; detail: string; href?: string };

export const timeline: { bars: TimelineBar[]; marks: TimelineMark[]; groups: { label: string; start: string; lane: TimelineBar["lane"] }[] } = {
  bars: [
    { lane: "education", label: "Lycée Saint-Louis", short: "Saint-Louis", detail: "Classes préparatoires, Paris", start: "2016-09", end: "2018-07", href: "/resume#r-edu" },
    { lane: "education", label: "Mines Paris – PSL", short: "Mines Paris", detail: "Master's, Mathematics & Computer Science", start: "2018-09", end: "2022-06", href: "/resume#r-edu" },
    { lane: "industry", label: "AWS", detail: "SDE Intern, Amazon Web Services, Dublin", start: "2020-06", end: "2020-12", href: "/resume#r-xp" },
    { lane: "industry", label: "BMW", detail: "Finance Project Manager (intern), BMW Group France", start: "2021-02", end: "2021-07", href: "/resume#r-xp" },
    { lane: "industry", label: "SDE", detail: "Software Development Engineer, Amazon, Paris", start: "2022-03", end: "2023-12", href: "/resume#r-xp" },
    { lane: "industry", label: "SDE II", detail: "Software Development Engineer II, Amazon, Paris", start: "2023-12", end: "2024-09", href: "/resume#r-xp" },
    { lane: "industry", label: "Applied Scientist II", detail: "Applied Scientist II, Amazon, London: demand forecasting", start: "2024-10", href: "/resume#r-xp" },
    { lane: "products", row: 0, label: "Giftruly", detail: "Giftruly: AI gift finder (web, iOS, Android)", start: "2023-03", href: "/projects/giftruly", color: "#e0195c" },
    { lane: "products", row: 1, label: "Aura", detail: "Aura: AI mood journal (iOS)", start: "2024-03", href: "/projects/aura", color: "#8c70cf" },
    { lane: "products", row: 2, label: "Prismo", detail: "Prismo: AI learning journal (iOS, Android)", start: "2026-02", href: "/projects/prismo", color: "#7b6cf6" },
  ],
  groups: [{ label: "Amazon", start: "2022-03", lane: "industry" }],
  marks: [
    { label: "3rd place, Smarter Mobility", date: "2023-03", detail: "3rd place, Smarter Mobility Data Challenge", href: "/research" },
    { label: "Paper on arXiv", date: "2023-06", detail: "EV charging forecasting paper (later in DMLR)", href: "/research" },
    { label: "Giftruly on the stores", date: "2023-09", detail: "Giftruly launched on the App Store and Google Play", href: "/projects/giftruly" },
    { label: "Aura on the App Store", date: "2024-04", detail: "Aura launched on the App Store", href: "/projects/aura" },
    { label: "AWS SA Professional", date: "2024-05", detail: "AWS Certified Solutions Architect – Professional", href: "/research" },
    { label: "Prismo launch", date: "2026-03", detail: "Prismo launched on the App Store and Google Play", href: "/projects/prismo" },
  ],
};
