export const siteConfig = {
  name: "Hans Gamarra",
  title: "Senior Full Stack Engineer",
  email: "hans.gamarra1303@gmail.com",
  location: "Barranquilla, Colombia",
  tagline:
    "I build reliable web products with Ruby on Rails APIs and React/Next.js front ends—shipping for distributed teams from Colombia.",
  url: "https://hansgamarra.com",
  links: {
    github: "https://github.com/hepu",
    linkedin: "https://www.linkedin.com/in/hans-gamarra",
  },
  resumePath: "/resume/hans-gamarra-resume.pdf",
} as const;

export type Project = {
  slug: string;
  client: string;
  employer: string;
  headline: string;
  problem: string;
  contribution: string;
  stack: string[];
  outcome: string;
  hasCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "deep-space-cru",
    client: "CRU Global",
    employer: "Deep Space Robots",
    headline: "Worldwide launch on Next.js and Rails",
    problem:
      "CRU Global needed a modern public experience and API-backed workflows for a global audience.",
    contribution:
      "Full-stack development pairing a Next.js application with a Ruby on Rails API, from implementation through launch readiness.",
    stack: ["Next.js", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    outcome:
      "Delivered an integrated web platform aligned with a worldwide rollout timeline.",
    hasCaseStudy: true,
  },
  {
    slug: "koombea-tuily",
    client: "Tuily",
    employer: "Koombea",
    headline: "Fintech card administration and integrations",
    problem:
      "Tuily required secure card lifecycle tooling and connections to payment and banking partners.",
    contribution:
      "Built and extended Rails services for card administration, integrating Mastercard and Domina flows and supporting operational tooling.",
    stack: ["Ruby on Rails", "PostgreSQL", "Redis", "REST APIs"],
    outcome:
      "Enabled product teams to operate card programs with dependable backend integrations.",
    hasCaseStudy: true,
  },
  {
    slug: "encora-synack",
    client: "Synack",
    employer: "Encora",
    headline: "Features on a global security platform",
    problem:
      "Synack’s platform needed steady feature delivery and maintainable full-stack changes at scale.",
    contribution:
      "Worked as a senior engineer on Rails and React, shipping features, reviewing code, and joining technical design discussions.",
    stack: ["Ruby on Rails", "React", "PostgreSQL", "Redis"],
    outcome:
      "Helped keep the security platform evolving with robust, review-ready contributions.",
    hasCaseStudy: true,
  },
  {
    slug: "ideaware-esports",
    client: "Activision / Blizzard esports",
    employer: "Ideaware",
    headline: "High-traffic league sites and survey APIs",
    problem:
      "Overwatch League and Call of Duty League properties needed fast marketing sites and APIs that could handle event traffic.",
    contribution:
      "Developed Next.js and Node experiences with ContentStack, plus a high-concurrency survey API supporting live fan engagement.",
    stack: ["Next.js", "Node.js", "ContentStack", "React"],
    outcome:
      "Supported major league launches and live events with performant front ends and APIs.",
  },
  {
    slug: "appmeup-platform",
    client: "AppMeUp",
    employer: "AppMeUp",
    headline: "Led Rails/React platform and mobile delivery",
    problem:
      "A growing product company needed full-stack leadership across web, search, mobile, and AWS operations.",
    contribution:
      "Led a developer team building Rails and React applications, React Native apps, Elasticsearch-backed search, and AWS infrastructure for high concurrency.",
    stack: [
      "Ruby on Rails",
      "React",
      "React Native",
      "Elasticsearch",
      "AWS",
    ],
    outcome:
      "Shipped multi-surface products with scalable search and cloud hosting practices.",
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export const experience: ExperienceEntry[] = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Deep Space Robots",
    summary:
      "Next.js and Rails delivery for client programs including CRU Global’s worldwide launch.",
  },
  {
    period: "2023 — 2024",
    role: "Senior Back End Developer",
    company: "Koombea",
    summary:
      "Rails backend work on Tuily fintech—card administration, Mastercard, and Domina integrations.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Software Engineer",
    company: "Encora (Synack)",
    summary:
      "Rails and React feature development on Synack’s global crowdsourced security platform.",
  },
  {
    period: "2017 — 2020",
    role: "Full Stack Developer",
    company: "Ideaware",
    summary:
      "League marketing properties for Activision and Blizzard plus high-concurrency fan engagement APIs.",
  },
  {
    period: "2013 — 2017",
    role: "Senior Full Stack Developer",
    company: "AppMeUp",
    summary:
      "Team lead across Rails, React, React Native, Elasticsearch, and AWS for client products.",
  },
  {
    period: "2011 — 2014",
    role: "Web Developer",
    company: "GAMA Creativos",
    summary:
      "Enterprise web solutions with PHP, JavaScript, and WordPress for regional clients.",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Ruby on Rails", "Node.js"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    name: "Cloud & delivery",
    items: ["AWS", "CI/CD", "Linux"],
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
