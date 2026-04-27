import jobdeed from "@/img/jobdeed.jpg";
import zapier from "@/img/zapier.jpeg";
import pre_msc from "@/img/pre_msc.png";
import jenkins from "@/img/jenkins.png";
import mlopsSpamDetector from "@/img/mlops.svg";
import popeye from "@/img/popeye.svg";

export const menuItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Education", href: "#education" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Linux", level: "Parrot / Debian", icon: "mdi-linux", color: "#8677771b" },
  { name: "Java", level: "Backend Development", icon: "mdi-language-java", color: "#007396" },
  { name: "Vue.js", level: "Frontend Framework", icon: "mdi-vuejs", color: "#42b883" },
  { name: "Vuetify", level: "UI Framework", icon: "mdi-vuetify", color: "#1867C0" },
  { name: "HTML", level: "Frontend Development", icon: "mdi-language-html5", color: "#E34F26" },
  { name: "Docker", level: "Containerization", icon: "mdi-docker", color: "#1572B6" },
  { name: "Python", level: "Scripting and Automation", icon: "mdi-language-python", color: "#dbd53a" },
  { name: "CI/CD", level: "Continuous Integration/Deployment", icon: "mdi-git", color: "#00e5a0" },
  { name: "Terraform", level: "Infrastructure as Code", icon: "mdi-cloud-upload", color: "#7B42BC" },
  { name: "Ansible", level: "Configuration Management", icon: "mdi-wrench", color: "#EE0000" },
];

export const education = [
  { year: "2025-2028", institution: "EPITECH", degree: "Information Systems Architect (ASI)" },
  { year: "2022-2024", institution: "Virtual University of Côte d'Ivoire (UVCI)", degree: "Bachelor in Computer Science - Level L2" },
  { year: "2021", institution: "Baccalaureate Obtained", degree: "" },
];

export const projects = [
  {
    title: "AI Automation System",
    description: "Automation of email and task workflows using AI integration.",
    date: "Feb 2024",
    techs: ["Zapier", "ChatGPT", "Gemini AI", "Gmail API"],
    link: "https://zapier.com/app/assets/zaps",
    image: zapier,
  },
  {
    title: "Job Web Platform",
    description: "Full-stack job-matching platform for recruiters and candidates.",
    date: "Sep 2025",
    techs: ["Vue.js", "Node.js", "Express", "MariaDB"],
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-NAN_5.git",
    image: jobdeed,
  },
  {
    title: "2D video game project with Java",
    description: "A defense where a hero fights zombies to protect his base. Real-time combat system with 5 upgradable weapons, unit shop, gold economy, multidirectional animations and customized UI. MVC architecture with unit tests.",
    date: "Nov 2025",
    techs: ["Java", "LibGDX", "Gradle", "JUnit"],
    link: "https://github.com/EpitechMscProPromo2028/T-JAV-501-NAN_2.git",
    image: pre_msc,
  },
    {
    title: "Jenkins CI/CD Automation",
    description: "Complete automation of a Jenkins instance without manual configuration. Technologies: Jenkins, YAML (JCasC), Groovy (DSL Job), Docker. Achievements:Declarative configuration of Jenkins via Configuration as Code. Authentication system with 4 users and secure password management via environment variables. Role-based authorization strategy with 4 roles with granular permissions. SEED Job dynamically generating CI/CD pipelines for any GitHub project. SCM integration with automatic polling to trigger builds.",
    date: "Dec 2025",
    techs: ["Jenkins", "Docker", "YAML", "Groovy"],
    link: "https://github.com/EpitechMscProPromo2028/T-DOP-502-NAN_13.git",
    image: jenkins,
  },
  {
    title: "MLOps Spam Detector",
    description: "Pipeline MLOps complet de détection de SMS spam. Modèle Naive Bayes (Scikit-learn) avec ~97% de précision, exposé via une API FastAPI, containerisé avec Docker, pipeline CI/CD sur Drone CI, tracking des expériences avec MLflow.",
    date: "Apr 2026",
    techs: ["Python", "Scikit-learn", "FastAPI", "Docker", "Drone CI", "MLflow"],
    link: "https://github.com/Josephgit2025/mlops-spam-detector",
    image: mlopsSpamDetector,
  },
  {
    title: "Distributed Voting Application with Docker (POPEYE)",
    description: "Microservices Architecture: Deployment and orchestration of 5 interconnected services (Python, Node.js, Java) via Docker Compose, with network isolation for security. Container Optimization: Drastic reduction of image size (up to -80%) through Alpine Linux and Multi-stage compilation (Java). Data Infrastructure: Implementation of a robust asynchronous processing pipeline using Redis (message queue) and PostgreSQL (persistence) with volume management.",
    date: "Dec 2025",
    techs: ["Docker", "Docker Compose", "Python", "Node.js", "Java", "Redis", "PostgreSQL"],
    link: "https://github.com/Josephgit2025/Distributed-Voting-Application",
    image: popeye,
  },

];