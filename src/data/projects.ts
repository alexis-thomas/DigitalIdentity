import type { ImageMetadata } from "astro";

import prismoCover from "../assets/projects/prismo/cover.png";
import prismoIcon from "../assets/projects/prismo/icon.png";
import prismoHome from "../assets/projects/prismo/hero.png";
import prismoSync from "../assets/projects/prismo/brain-sync.png";
import prismoQuiz from "../assets/projects/prismo/quiz.png";
import prismoGraph from "../assets/projects/prismo/knowledge-graph.png";
import prismoJournal from "../assets/projects/prismo/journal.png";

import giftrulyCover from "../assets/projects/giftruly/cover.png";
import giftrulyIcon from "../assets/projects/giftruly/icon.png";
import giftrulyApp from "../assets/projects/giftruly/app-finder.png";

import auraCover from "../assets/projects/aura/cover.png";
import auraIcon from "../assets/projects/aura/icon.png";
import catAwful from "../assets/projects/aura/cat-awful.png";
import catBad from "../assets/projects/aura/cat-bad.png";
import catNeutral from "../assets/projects/aura/cat-neutral.png";
import catGood from "../assets/projects/aura/cat-good.png";
import catGreat from "../assets/projects/aura/cat-incredible.png";

export type Link = { label: string; url: string; kind: "web" | "appstore" | "play" | "code" };
export type Shot = { src: ImageMetadata; alt: string; caption?: string; phone?: boolean };
export type Lane = { label: string; nodes: string[] };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** <title>, kept under ~65 chars */
  seoTitle: string;
  /** ~155 chars, used for <meta name="description"> */
  seoDescription: string;
  category: string; // schema.org applicationCategory
  status: string;
  period: string;
  startDate: string;
  role: string;
  platforms: string[];
  accent: string;
  icon: ImageMetadata;
  cover: ImageMetadata;
  coverAlt: string;
  coverCaption?: string;
  links: Link[];
  overview: string[];
  features: string[];
  highlights: { title: string; body: string }[];
  architecture: { title: string; lanes: Lane[]; note?: string };
  stack: { group: string; items: string[] }[];
  numbers: { value: string; label: string }[];
  gallery: Shot[];
  galleryLayout?: "phones" | "row" | "mixed";
};

export const projects: Project[] = [
  {
    slug: "prismo",
    name: "Prismo",
    tagline: "An AI learning journal that turns what you read, watch and hear into organized notes and spaced-repetition quizzes.",
    seoTitle: "Prismo: AI Learning Journal & Quiz App | Alexis Thomas",
    seoDescription:
      "Prismo case study: an AI learning app for iOS and Android with a multi-stage LLM pipeline, conflict-free cloud sync and spaced repetition, built by Alexis Thomas.",
    category: "EducationalApplication",
    status: "Live on iOS & Android",
    period: "2026 – present",
    startDate: "2026-02",
    role: "Solo founder & engineer: product, design, mobile, backend, AI and release",
    platforms: ["iOS", "iPadOS", "Android", "Web"],
    accent: "#7b6cf6",
    icon: prismoIcon,
    cover: prismoCover,
    coverAlt: "Prismo marketing banner: 'Remember everything you learn' next to three phone screens of the app",
    links: [
      { label: "prismo-app.com", url: "https://prismo-app.com", kind: "web" },
      { label: "App Store", url: "https://apps.apple.com/app/id6759450471", kind: "appstore" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.elial.prismo", kind: "play" },
    ],
    overview: [
      "Most of what we read, watch or listen to is forgotten within days. Prismo is a learning journal built to fix that: you write, dictate, paste or photograph what you learned, and an AI pipeline extracts the individual ideas, files them into a knowledge library it organizes for you, then quizzes you on them with spaced repetition so they stick.",
      "The user stays in control: the AI only ever *proposes* changes (create, update, move, merge), and nothing touches the library until it's approved on a review screen. I designed and built all of it: the mobile app, the AWS backend and the LLM pipeline.",
    ],
    features: [
      "Capture by typing, dictation, photos, PDFs or links",
      "AI proposes notes and folders; nothing changes until you approve it",
      "Quizzes on your own notes, scheduled with spaced repetition",
      "A knowledge graph of how your ideas connect",
    ],
    highlights: [
      {
        title: "A multi-stage LLM pipeline with deterministic guardrails",
        body: "Entries go through *understand → write → validate → repair*. The model works from a compact summary of the user's library rather than the whole thing, and a deterministic, unit-tested validator rejects unsafe changes (duplicate or cyclic folders, deleting notes it hasn't read) before anything reaches the user, with at most one repair call. An offline evaluation set tracks quality against a cost target of under $0.50 per user per month.",
      },
      {
        title: "Offline-first sync across devices",
        body: "Libraries sync through S3 with vector clocks for conflict detection and tombstones for deletions, so edits made offline on two devices merge without losing data.",
      },
    ],
    architecture: {
      title: "How an entry becomes knowledge",
      lanes: [
        { label: "Capture", nodes: ["Text & voice", "Photos (OCR)", "PDFs & links", "Share sheet"] },
        { label: "Expo app", nodes: ["Journal entry", "Review screen", "Local library"] },
        { label: "AWS (CDK)", nodes: ["API Gateway + JWT", "Lambda pipeline", "Cognito", "S3 sync · DynamoDB"] },
        { label: "LLM", nodes: ["Understand", "Write", "Validate (deterministic)", "Repair ×1"] },
      ],
      note: "Proposed changes return to the app and are applied only after the user approves them.",
    },
    stack: [
      { group: "App", items: ["React Native (Expo)", "TypeScript", "Swift (iOS widget)"] },
      { group: "Backend", items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "AWS CDK"] },
      { group: "AI", items: ["Gemini", "Claude on Amazon Bedrock"] },
    ],
    numbers: [
      { value: "870+", label: "installs on iOS & Android since launch" },
      { value: "68", label: "countries with active users" },
      { value: "Mar 2026", label: "launched on the App Store & Google Play" },
    ],
    gallery: [
      { src: prismoHome, alt: "Prismo home screen with level progress, daily missions and streak", caption: "Home", phone: true },
      { src: prismoSync, alt: "Prismo Knowledge Sync review screen proposing a new folder and two new notes", caption: "Knowledge Sync: review AI proposals", phone: true },
      { src: prismoQuiz, alt: "Prismo quiz screen showing a multiple-choice question and explanation", caption: "Quizzes from your own notes", phone: true },
      { src: prismoGraph, alt: "Prismo knowledge graph connecting topics such as Science, Personal and Career", caption: "The knowledge graph", phone: true },
      { src: prismoJournal, alt: "Prismo journal entry editor", caption: "Capture in the journal", phone: true },
    ],
    galleryLayout: "phones",
  },
  {
    slug: "giftruly",
    name: "Giftruly",
    tagline: "An AI gift concierge: describe the person in a sentence and get a shortlist of ideas, each with a reason it fits.",
    seoTitle: "Giftruly: AI Gift Finder for Web, iOS & Android | Alexis Thomas",
    seoDescription:
      "Giftruly case study: an AI gift finder for web, iOS and Android on a serverless AWS stack, with LLM recommendations in 5 languages and 7 Amazon marketplaces.",
    category: "ShoppingApplication",
    status: "Live on web, iOS & Android",
    period: "2023 – present",
    startDate: "2023-03",
    role: "Founder & engineer: product, full-stack, infrastructure and AI",
    platforms: ["Web", "iOS", "Android"],
    accent: "#e0195c",
    icon: giftrulyIcon,
    cover: giftrulyCover,
    coverAlt: "Giftruly 2.0 homepage: 'The gift that shows you get them' with a free-text gift concierge and product cards",
    coverCaption: "Giftruly 2.0, currently in beta",
    links: [
      { label: "giftruly.com", url: "https://giftruly.com", kind: "web" },
      { label: "App Store", url: "https://apps.apple.com/us/app/giftruly-ai-gift-finder/id6463821360", kind: "appstore" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.elial.Giftruly", kind: "play" },
    ],
    overview: [
      "Finding a thoughtful gift for someone whose tastes differ from yours can take hours. Giftruly turns a short questionnaire, or a single free-text description like *\"My mom turns 60, loves gardening and baking, under $75\"*, into a shortlist of gift ideas, each with a sentence explaining why it fits, linked to the right local Amazon store.",
      "I started Giftruly in March 2023, when LLM products were brand new, and have run it in production since: a website and native apps on both stores, a multi-account AWS backend, and an AI layer that has moved from OpenAI to Azure OpenAI to Claude on Amazon Bedrock. Giftruly 2.0, a ground-up rebuild of the web experience, is now in beta.",
    ],
    features: [
      "A step-by-step gift finder: occasion, recipient, age, interests and budget",
      "A free-text concierge that treats budgets as hard limits",
      "7 countries, each with its local Amazon store and currency",
    ],
    highlights: [
      {
        title: "Automatic kill switches for LLM spend",
        body: "CloudWatch alarms on the chat function trigger Lambdas that either disable the AI feature gracefully or throttle its concurrency, so a traffic spike or abuse can't turn into a surprise bill.",
      },
      {
        title: "A recommender that degrades gracefully",
        body: "Giftruly 2.0 ranks a gift catalog locally, adds semantic search with embeddings, and asks Claude on Bedrock for the final picks with structured output. Model results go through the same validation as local ones, and spend limits are reserved atomically before each call; when a limit trips, users get local results instead of an error.",
      },
      {
        title: "Migrations without breaking shipped apps",
        body: "The AI layer moved from OpenAI to Azure OpenAI to Claude on Bedrock. When Amazon retired its product API and an old Claude model reached end of life, I patched the production backend in place so the apps already on people's phones kept working without a new release.",
      },
    ],
    architecture: {
      title: "Recommendation flow (Giftruly 2.0)",
      lanes: [
        { label: "Client", nodes: ["Next.js static site", "Expo iOS / Android"] },
        { label: "Edge", nodes: ["CloudFront", "S3"] },
        { label: "Compute", nodes: ["Lambda", "Spend limits (DynamoDB)"] },
        { label: "Intelligence", nodes: ["Local ranking", "Embeddings", "Claude (Bedrock)"] },
      ],
      note: "If the model or a budget guard is unavailable, the local recommender answers on its own.",
    },
    stack: [
      { group: "Web & mobile", items: ["Next.js", "React Native (Expo)", "TypeScript"] },
      { group: "Backend", items: ["AWS Lambda", "DynamoDB", "CloudFront", "Cognito", "AWS CDK"] },
      { group: "AI", items: ["Claude on Amazon Bedrock", "Embeddings"] },
    ],
    numbers: [
      { value: "85K+", label: "AI gift recommendations served" },
      { value: "24K+", label: "unique devices used the gift finder" },
      { value: "1K+", label: "downloads on Google Play" },
    ],
    gallery: [
      { src: giftrulyApp, alt: "Giftruly mobile app occasion picker: Birthday, Valentine's Day, Wedding, Christmas", caption: "Mobile app: step-by-step finder", phone: true },
    ],
    galleryLayout: "phones",
  },
  {
    slug: "aura",
    name: "Aura",
    tagline: "A private mood journal with an AI companion: check in with a tap, and get a gentle note back.",
    seoTitle: "Aura: AI Mood Journal for iOS | Case Study by Alexis Thomas",
    seoDescription:
      "Aura case study: an AI mood journal for iOS, taken from idea to the App Store in about a month on a serverless AWS and Bedrock backend. By Alexis Thomas.",
    category: "HealthApplication",
    status: "Live on the App Store",
    period: "2024 – present",
    startDate: "2024-03",
    role: "Solo developer: design, mobile, backend and AI",
    platforms: ["iOS"],
    accent: "#8c70cf",
    icon: auraIcon,
    cover: auraCover,
    coverAlt: "Aura 'pencil notebook' concept board: three hand-drawn phone screens with mood cats, a journal page and a weekly summary",
    coverCaption: "The \"pencil notebook\" design direction",
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/aura-daily-journal-mood/id6480318800", kind: "appstore" },
    ],
    overview: [
      "Aura is a daily mood journal. You check in by picking how you feel, optionally add a line and a few tags, and Aura, the cat who lives in the notebook, answers with a short, kind note. Over time it surfaces the small things that help you feel like yourself.",
      "I took the first version from empty repository to the App Store in about a month (March–April 2024): an Expo app, a serverless AWS backend, and an LLM companion running on Amazon Bedrock. I'm now rebuilding it as \"the pencil notebook\": no streaks, no ads, no account, and pages that stay on your phone.",
    ],
    features: [
      "One-tap daily mood check-in, with optional notes and tags",
      "An AI companion that answers each entry with a short note",
      "A monthly mood calendar",
    ],
    highlights: [
      {
        title: "Serverless AI backend with cost protection",
        body: "The app talks to a small AWS backend (API Gateway, Python Lambdas, Claude on Bedrock) without requiring an account: requests are signed with anonymous Cognito credentials. If usage spikes, a CloudWatch alarm alerts me and automatically throttles the AI function.",
      },
      {
        title: "In progress: a privacy-first rebuild",
        body: "The next version keeps journal entries on the phone, runs on a backend with no database that never logs what people write, and falls back to on-device behaviour when the AI is unavailable.",
      },
    ],
    architecture: {
      title: "Launch architecture",
      lanes: [
        { label: "App", nodes: ["React Native (Expo)"] },
        { label: "Auth", nodes: ["Cognito identity pool", "SigV4-signed calls"] },
        { label: "API", nodes: ["API Gateway (IAM)", "Python Lambdas", "Reserved concurrency"] },
        { label: "AI & ops", nodes: ["Claude 3 Haiku (Bedrock)", "CloudWatch alarm", "SNS → kill switch"] },
      ],
    },
    stack: [
      { group: "App", items: ["React Native (Expo)", "TypeScript"] },
      { group: "Backend", items: ["AWS Lambda (Python)", "API Gateway", "Cognito", "AWS CDK"] },
      { group: "AI", items: ["Claude on Amazon Bedrock"] },
    ],
    numbers: [
      { value: "Apr 2024", label: "launched on the App Store" },
      { value: "~1 month", label: "from idea to App Store" },
    ],
    gallery: [
      { src: catAwful, alt: "Blue pencil-drawn cat crying: mood 'Awful'", caption: "Awful" },
      { src: catBad, alt: "Lilac pencil-drawn cat looking down: mood 'Low'", caption: "Low" },
      { src: catNeutral, alt: "Sage pencil-drawn cat with a calm face: mood 'Okay'", caption: "Okay" },
      { src: catGood, alt: "Peach pencil-drawn cat smiling: mood 'Good'", caption: "Good" },
      { src: catGreat, alt: "Yellow pencil-drawn cat beaming: mood 'Great'", caption: "Great" },
    ],
    galleryLayout: "row",
  },
];


export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;
