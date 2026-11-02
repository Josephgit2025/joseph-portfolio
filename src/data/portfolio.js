// ============================================================================
// All the content of the portfolio lives here: edit this file to update the site.
// ============================================================================
import {
  mdiAnsible,
  mdiCloudCogOutline,
  mdiCubeOutline,
  mdiDocker,
  mdiElephant,
  mdiEmailOutline,
  mdiGithub,
  mdiInfinity,
  mdiKubernetes,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguagePython,
  mdiLinkedin,
  mdiLinux,
  mdiSourceBranch,
  mdiTerraform,
  mdiVuejs,
  mdiVuetify,
} from "@mdi/js";

import photo from "@/img/josh.webp";
import logo from "@/img/logo.webp";
import zapier from "@/img/zapier.webp";
import preMsc from "@/img/pre_msc.webp";
import jenkins from "@/img/jenkins.webp";
import mlopsSpamDetector from "@/img/mlops.svg";
import popeye from "@/img/popeye.svg";
import coral from "@/img/coral.webp";
import bernstein from "@/img/bernstein.webp";

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  firstName: "Joseph-Marie",
  lastName: "Bilé",
  fullName: "Joseph-Marie Bilé",
  photo,
  logo,
  school: "EPITECH Nantes",
  location: "Nantes, France",
  email: "joseph-marie.bile@epitech.eu",
  // Rotating words in the hero: "I build …"
  roles: [
    "automated CI/CD pipelines",
    "cloud infrastructure as code",
    "containerized applications",
    "backend services",
  ],
  tagline:
    "MSc student in Information Systems Architecture at EPITECH Nantes, passionate about DevOps, AI and backend development.",
  cv: `${import.meta.env.BASE_URL}CV%20JOSEPH.pdf`,
  cvFileName: "CV-Joseph-Marie-Bile.pdf",
};

export const socials = [
  { name: "GitHub", label: "github.com/hpesoj69", href: "https://github.com/hpesoj69", icon: mdiGithub },
  { name: "LinkedIn", label: "Joseph-Marie Bilé", href: "https://www.linkedin.com/in/joseph-marie-bilé-283470385", icon: mdiLinkedin },
  { name: "Email", label: profile.email, href: `mailto:${profile.email}`, icon: mdiEmailOutline },
];

export const menuItems = [
  { text: "About", id: "about" },
  { text: "Education", id: "education" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const focusAreas = [
  {
    title: "CI/CD & Automation",
    icon: mdiInfinity,
    text: "Pipelines that build, test and deploy on every push: Jenkins configured as code, GitHub Actions, GitLab CI and GitOps with ArgoCD.",
  },
  {
    title: "Cloud & Infrastructure as Code",
    icon: mdiCloudCogOutline,
    text: "Reproducible infrastructure on DigitalOcean with Terraform and Ansible, up to multi-node Kubernetes clusters.",
  },
  {
    title: "Containers & Backend",
    icon: mdiCubeOutline,
    text: "Microservices in Python, Java and Node.js, packaged into lean multi-stage Docker images.",
  },
];

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: "Containerization", icon: mdiDocker, color: "#2496ED" },
      { name: "Kubernetes", level: "Container orchestration", icon: mdiKubernetes, color: "#326CE5" },
      { name: "Terraform", level: "Infrastructure as Code", icon: mdiTerraform, color: "#844FBA" },
      { name: "Ansible", level: "Configuration management", icon: mdiAnsible, color: "#EE0000" },
      { name: "CI/CD", level: "GitHub Actions · GitLab CI · Jenkins", icon: mdiSourceBranch, color: "#00C389" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Java", level: "Backend development", icon: mdiLanguageJava, color: "#E76F00" },
      { name: "Python", level: "Scripting & automation", icon: mdiLanguagePython, color: "#3776AB" },
      { name: "PostgreSQL", level: "Relational databases", icon: mdiElephant, color: "#4169E1" },
      { name: "Linux", level: "Parrot / Debian", icon: mdiLinux, color: "#E8A400" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: "Frontend framework", icon: mdiVuejs, color: "#42B883" },
      { name: "Vuetify", level: "UI framework", icon: mdiVuetify, color: "#1867C0" },
      { name: "HTML", level: "Frontend development", icon: mdiLanguageHtml5, color: "#E34F26" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Education (most recent first)
// ---------------------------------------------------------------------------
export const education = [
  { year: "2025-2028", institution: "EPITECH", degree: "MSc · Information Systems Architect (ASI)" },
  { year: "2022-2024", institution: "Virtual University of Côte d'Ivoire (UVCI)", degree: "Bachelor in Computer Science · Level L2" },
  { year: "2021", institution: "Baccalaureate", degree: "High school diploma obtained" },
];

// ---------------------------------------------------------------------------
// Projects
//   sortKey    "YYYY-MM": used to order projects, most recent first
//   categories keys of `projectCategories` (used by the filters)
//   featured   shown as a large card at the top
//   imageFit   "cover" for screenshots/diagrams, "contain" for square logos
//   tags       short list shown on the card
//   stack      detailed stack shown in the project modal
// ---------------------------------------------------------------------------
export const projectCategories = {
  devops: "DevOps & Cloud",
  software: "Software",
  ai: "Automation & AI",
};

export const projects = [
  {
    title: "MLOps Spam Detector: Cloud DevOps",
    date: "Apr 2026",
    sortKey: "2026-04",
    categories: ["devops", "ai"],
    featured: true,
    summary:
      "An SMS spam-detection model running in real production on DigitalOcean, with its whole lifecycle, from training to deployment, automated through reproducible infrastructure and multi-source CI/CD.",
    description:
      "This project combines Machine Learning and DevOps to deploy an SMS spam detection model in real production on DigitalOcean cloud. The goal: fully automate the model lifecycle, from training to deployment, with a reproducible infrastructure and multi-source CI/CD pipelines.",
    highlights: [
      "ML model (Scikit-learn) tracked with MLflow and served through a FastAPI API",
      "Infrastructure provisioned with Terraform and configured with Ansible (Vault AES256)",
      "Deployed on a managed Kubernetes cluster (DOKS) on DigitalOcean",
      "Multi-source CI/CD: GitHub Actions, GitLab CI, Drone CI and ArgoCD",
    ],
    tags: ["Python", "MLflow", "FastAPI", "Kubernetes", "Terraform", "ArgoCD"],
    stack: [
      { label: "ML / NLP", items: ["Python", "Scikit-learn", "MLflow"] },
      { label: "API", items: ["FastAPI"] },
      { label: "Containerization", items: ["Docker"] },
      { label: "IaC", items: ["Terraform", "Ansible (Vault AES256)"] },
      { label: "Orchestration", items: ["Kubernetes (DOKS)"] },
      { label: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Drone CI", "ArgoCD"] },
      { label: "Cloud", items: ["DigitalOcean (DOKS · Droplet · PostgreSQL · Load Balancer)"] },
      { label: "Database", items: ["PostgreSQL", "Redis"] },
    ],
    link: "https://github.com/hpesoj69/mlops-spam-detector",
    image: mlopsSpamDetector,
    imageFit: "cover",
  },
  {
    title: "Bernstein: Containers Symphony Orchestration",
    date: "Jun 2026",
    sortKey: "2026-06",
    categories: ["devops"],
    summary:
      "A distributed web poll application deployed on a real multi-node Kubernetes cluster on DigitalOcean, with Traefik routing, GitOps through ArgoCD and automated provisioning.",
    description:
      "This project is part of the Epitech MSc curriculum (T-DOP-603) and focuses on container orchestration with Kubernetes. The goal: deploy a distributed web poll application on a real multi-node Kubernetes cluster hosted on DigitalOcean, using industry-standard DevOps tools and practices: Traefik for routing, ArgoCD for GitOps, Terraform for infrastructure provisioning, and Ansible for automation.",
    highlights: [
      "Distributed poll app (Python, Java, Node.js) on a multi-node Kubernetes cluster",
      "Traefik for routing traffic into the cluster",
      "GitOps continuous delivery with ArgoCD",
      "Infrastructure provisioned with Terraform and automated with Ansible",
    ],
    tags: ["Kubernetes", "ArgoCD", "Traefik", "Terraform", "Ansible"],
    stack: [
      { label: "Languages", items: ["Python (Flask)", "Java (Maven)", "Node.js"] },
      { label: "Storage", items: ["PostgreSQL 9.6", "Redis 5.0"] },
      { label: "Containerization", items: ["Docker"] },
      { label: "Orchestration", items: ["Kubernetes (DOKS)", "Traefik", "ArgoCD"] },
      { label: "IaC", items: ["Terraform", "Ansible"] },
      { label: "Cloud", items: ["DigitalOcean (DOKS · Block Storage · Load Balancer)"] },
      { label: "CI/CD", items: ["GitHub Actions", "GitOps (ArgoCD)"] },
    ],
    link: "https://github.com/hpesoj69/bernstein",
    image: bernstein,
    imageFit: "cover",
  },
  {
    title: "CORAL: Real-Time Communication Platform",
    date: "Mar – Apr 2026",
    sortKey: "2026-03",
    categories: ["software"],
    summary:
      "A Discord-like, full-stack real-time communication app for web and desktop, with a Next.js frontend, a Rust backend and WebSockets.",
    description:
      "Coral is a full-stack real-time communication application built with modern technologies across web and desktop platforms. It demonstrates proficiency in building scalable, multi-platform applications with real-time functionality, similar to Discord.",
    highlights: [
      "Real-time messaging over WebSocket, similar to Discord",
      "Web app with Next.js 16 and React 19, desktop app with Tauri 2",
      "Rust backend built with Axum and Sea-ORM on PostgreSQL 16",
      "Whole stack containerized with Docker Compose",
    ],
    tags: ["Next.js", "Rust", "WebSocket", "Tauri", "PostgreSQL"],
    stack: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Rust", "Axum", "Sea-ORM", "WebSocket"] },
      { label: "Desktop", items: ["Tauri 2"] },
      { label: "Database", items: ["PostgreSQL 16"] },
      { label: "DevOps", items: ["Docker", "Docker Compose"] },
    ],
    link: "https://github.com/hpesoj69/CORAL-APPLICATION-RTC",
    image: coral,
    imageFit: "contain",
  },
  {
    title: "Jenkins CI/CD Automation",
    date: "Dec 2025",
    sortKey: "2025-12",
    categories: ["devops"],
    summary:
      "A Jenkins instance configured entirely as code, with no manual setup: role-based access and a seed job that generates pipelines for any GitHub project.",
    description:
      "Complete automation of a Jenkins instance without any manual configuration, using Jenkins Configuration as Code (JCasC), Job DSL and Docker.",
    highlights: [
      "Declarative configuration of Jenkins via Configuration as Code (JCasC)",
      "Authentication with 4 users and secure password management via environment variables",
      "Role-based authorization strategy with 4 roles and granular permissions",
      "SEED job dynamically generating CI/CD pipelines for any GitHub project",
      "SCM integration with automatic polling to trigger builds",
    ],
    tags: ["Jenkins", "JCasC", "Groovy", "Docker"],
    stack: [
      { label: "CI", items: ["Jenkins"] },
      { label: "Configuration", items: ["YAML (JCasC)", "Groovy (Job DSL)"] },
      { label: "Runtime", items: ["Docker"] },
    ],
    link: "https://github.com/EpitechMscProPromo2028/T-DOP-502-NAN_13",
    image: jenkins,
    imageFit: "contain",
  },
  {
    title: "POPEYE: Distributed Voting Application",
    date: "Dec 2025",
    sortKey: "2025-12",
    categories: ["devops"],
    summary:
      "Five interconnected microservices orchestrated with Docker Compose, with images up to 80% lighter and an asynchronous Redis → PostgreSQL pipeline.",
    description:
      "Deployment and orchestration of a distributed voting application made of 5 interconnected services (Python, Node.js, Java) with Docker Compose, focused on security, image optimization and a robust data pipeline.",
    highlights: [
      "5 interconnected services (Python, Node.js, Java) orchestrated with Docker Compose",
      "Network isolation between services for security",
      "Image size reduced by up to 80% with Alpine Linux and multi-stage builds (Java)",
      "Asynchronous pipeline: Redis as message queue, PostgreSQL for persistence, with volume management",
    ],
    tags: ["Docker Compose", "Python", "Node.js", "Java", "Redis", "PostgreSQL"],
    stack: [
      { label: "Containerization", items: ["Docker", "Docker Compose", "Alpine Linux"] },
      { label: "Services", items: ["Python", "Node.js", "Java"] },
      { label: "Data", items: ["Redis", "PostgreSQL"] },
    ],
    link: "https://github.com/hpesoj69/Distributed-Voting-Application",
    image: popeye,
    imageFit: "cover",
  },
  {
    title: "2D Video Game with Java",
    date: "Nov 2025",
    sortKey: "2025-11",
    categories: ["software"],
    summary:
      "A zombie-defense game where a hero protects his base: real-time combat, upgradable weapons and a gold economy, built on an MVC architecture.",
    description:
      "A defense game where a hero fights zombies to protect his base, built with Java and LibGDX.",
    highlights: [
      "Real-time combat system with 5 upgradable weapons",
      "Unit shop and gold economy",
      "Multidirectional animations and customized UI",
      "MVC architecture covered by unit tests (JUnit)",
    ],
    tags: ["Java", "LibGDX", "Gradle", "JUnit"],
    stack: [
      { label: "Game", items: ["Java", "LibGDX"] },
      { label: "Build & tests", items: ["Gradle", "JUnit"] },
    ],
    link: "https://github.com/hpesoj69/Jeu-Video-2D-Java-LibGDX",
    image: preMsc,
    imageFit: "contain",
  },
  {
    title: "AI Automation System",
    date: "Feb 2024",
    sortKey: "2024-02",
    categories: ["ai"],
    summary:
      "Automated email and task workflows powered by AI, connecting Gmail with ChatGPT and Gemini through Zapier.",
    description: "Automation of email and task workflows using AI integration.",
    highlights: [
      "Email and task workflows automated end to end",
      "Zapier workflows connecting the Gmail API with ChatGPT and Gemini AI",
    ],
    tags: ["Zapier", "ChatGPT", "Gemini AI", "Gmail API"],
    stack: [
      { label: "Automation", items: ["Zapier"] },
      { label: "AI", items: ["ChatGPT", "Gemini AI"] },
      { label: "APIs", items: ["Gmail API"] },
    ],
    link: "https://zapier.com/app/assets/zaps",
    image: zapier,
    imageFit: "contain",
  },
];
