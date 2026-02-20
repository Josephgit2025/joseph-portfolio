import jobdeed from "@/img/jobdeed.jpg";
import zapier from "@/img/zapier.jpeg";
import pre_msc from "@/img/pre_msc.png";
import jenkins from "@/img/jenkins.png";

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
  { name: "Jenkins", level: "CI/CD", icon: "mdi-jenkins", color: "#D24939" },
  {name: "Python", level: "Scripting and Automation", icon: "mdi-language-python", color: "#dbd53a"},  
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
    date: "Dev 2025",
    techs: ["Jenkins", "Docker", "YAML", "Groovy"],
    link: "https://github.com/EpitechMscProPromo2028/T-DOP-502-NAN_13.git",
    image: jenkins,
  },

];