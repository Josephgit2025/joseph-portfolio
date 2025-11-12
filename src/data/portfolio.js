import malware from "@/img/malware.jpg";
import jobdeed from "@/img/jobdeed.jpg";
import zapier from "@/img/zapier.jpeg";

export const menuItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Education", href: "#education" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

export const skills = [
  { name: "Linux", level: "Parrot / Debian", icon: "mdi-linux", color: "#FCC624" },
  { name: "Java", level: "Backend Development", icon: "mdi-language-java", color: "#007396" },
  { name: "Bash", level: "Shell Scripting", icon: "mdi-bash", color: "#4EAA25" },
  { name: "Vue.js", level: "Frontend Framework", icon: "mdi-vuejs", color: "#42b883" },
  { name: "Vuetify", level: "UI Framework", icon: "mdi-vuetify", color: "#1867C0" },
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
    techs: ["Zapier", "ChatGPT", "Gmail API"],
    link: "https://zapier.com/app/assets/zaps",
    image: zapier,
  },
  {
    title: "Malware License Platform",
    description: "E-commerce platform prototype to simulate secure sales of digital software keys.",
    date: "Oct 2025",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-NAN_joseph-marie-bile.git",
    image: malware,
  },
  {
    title: "Job Web Platform",
    description: "Full-stack job-matching platform for recruiters and candidates.",
    date: "Sep 2025",
    techs: ["Vue.js", "Node.js", "Express", "MariaDB"],
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-NAN_5.git",
    image: jobdeed,
  },
];
