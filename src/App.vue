<template>
  <v-app>
    <v-app-bar color="white" flat elevate-on-scroll app>
      <v-container class="d-flex align-center justify-space-between">
        <v-toolbar-title>
          <v-img :src="Log" alt="Logo du portfolio" contain max-height="50" max-width="50" />
        </v-toolbar-title>


        <div class="d-none d-md-flex">
          <v-btn v-for="item in menuItems" :key="item.text" :href="item.href" color="primary" variant="outlined"
            rounded="xl" class="mx-1">
            {{ item.text }}
          </v-btn>
        </div>


        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app class="d-md-none">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.text" :href="item.href" @click="drawer = false">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- MAIN -->
    <v-main>
      <!-- HOME -->
      <v-container id="home" class="section-spacing fade-in">
        <v-row align="center">
          <v-col cols="12" md="7">
            <h2 class="text-h4 text-md-h3 font-weight-bold">
              Hello, I’m <span class="accent">Joseph-Marie Bilé</span>
            </h2>
            <h2 class="text-subtitle-3 mb-6">
              Computer Science Student at EPITECH Nantes
            </h2>
            <v-btn color="primary" class="mr-3" href="#projects" rounded="xl" variant="outlined">
              See my projects
            </v-btn>
            <v-btn color="primary" href="#contact" rounded="xl" variant="outlined">
              Contact me
            </v-btn>
          </v-col>

          <v-col cols="12" md="5">
            <v-card elevation="3" class="profile-card">
              <v-img :src="Josh" alt="Photo de profil" height="400" cover />
            </v-card>
          </v-col>
        </v-row>
      </v-container>




      <!-- ABOUT -->
      <v-container id="about" class="section-spacing fade-in">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="section-title">About</h3>
          <v-row>
            <v-col cols="12" md="8">
              <p>
                Student in Computer Science at EPITECH Nantes (BAC+5), passionate about
                cybersecurity and artificial intelligence. <br />
                I am looking for an internship / work-study starting from January 2026 in order
                to develop my skills and create efficient and automated technological
                solutions.<br />
                My work method is based on analysis, research, and curiosity.
              </p>
            </v-col>

            <v-col cols="12" md="4">
              <v-card flat class="pa-4 rounded-lg border">
                <h4 class="text-h6 section-title">Skills</h4>
                <v-list density="compact">
                  <v-list-item>Linux (Parrot / Debian)</v-list-item>
                  <v-list-item>Java, Bash</v-list-item>
                  <v-list-item>Vue.Js, Vuetify.Js</v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>




      <!-- EDUCATION -->
      <v-container id="education" class="section-spacing fade-in">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="section-title">Education</h3>
          <v-timeline density="compact">
            <v-timeline-item v-for="(edu, index) in education" :key="index" color="primary" dot-color="primary">
              <v-card flat>
                <v-card-subtitle>{{ edu.year }}</v-card-subtitle>
                <v-card-title>{{ edu.institution }}</v-card-title>
                <v-card-text v-if="edu.degree">{{ edu.degree }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-container>




      <!-- PROJECTS -->
      <v-container id="projects" class="section-spacing fade-in">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="section-title">Projects</h3>
          <v-row>
            <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 12 : 2"
                  class="transition-smooth rounded-xl hover-scale">
                  <v-img :src="project.image" height="180px" cover />
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-text>{{ project.description }}</v-card-text>
                  <v-card-subtitle class="text-grey">{{ project.meta }}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn color="primary" :href="project.link" rounded="xl" variant="outlined">
                      See More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card>
      </v-container>

      <!--  CONTACT -->
      <v-container id="contact" class="section-spacing fade-in">
        <v-row>
          <v-col cols="12" md="8">
            <v-card flat class="pa-6 rounded-xl" elevation="2">
              <h3 class="section-title">Contact</h3>
              <v-form @submit.prevent="onSubmit">
                <v-text-field label="Name" v-model="form.name" variant="outlined" class="mb-3" required />
                <v-text-field label="Email" v-model="form.email" type="email" variant="outlined" class="mb-3"
                  required />
                <v-textarea label="Message" v-model="form.message" variant="outlined" class="mb-3" required />

                <v-btn color="primary" type="submit" rounded="xl" variant="outlined" :loading="sending">
                  Send
                </v-btn>

                <div v-if="feedback" class="mt-3" :class="feedback.includes('✅') ? 'text-success' : 'text-error'">
                  {{ feedback }}
                </div>
              </v-form>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat class="pa-6 rounded-xl" elevation="2">
              <h4 class="section-title">Join</h4>
              <p>
                <strong>Email: </strong>
                <a href="mailto:joseph-marie.bile@epitech.eu">joseph-marie.bile@epitech.eu</a>
              </p>
              <p>
                <strong>GitHub: </strong>
                <a href="https://github.com/Josephgit2025" target="_blank">Josephgit2025</a>
              </p>
              <p>
                <strong>LinkedIn: </strong>
                <a href="https://www.linkedin.com/in/joseph-marie-bilé-283470385" target="_blank">
                  Joseph-Marie Bilé
                </a>
              </p>
              <v-btn outlined color="black" class="mt-4" href="/public/CV_Joseph_Marie_Bile_STAR.pdf" download
                rounded="xl">
                Download CV
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- FOOTER  -->
    <v-footer color="white" flat class="pa-4">
      <v-container class="text-center">
        <p>© {{ year }} Joseph-Marie Bilé</p>
      </v-container>
    </v-footer>
  </v-app>
</template>











<script setup>


import { ref } from "vue";
import emailjs from "emailjs-com";

import Log from "@/img/Log.png";
import Josh from "@/img/Josh.jpg";
import malware from "@/img/malware.jpg";
import jobdeed from "@/img/jobdeed.jpg";
import zapier from "@/img/zapier.jpeg";

const year = new Date().getFullYear();
const drawer = ref(false);

const menuItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Education", href: "#education" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

const form = ref({ name: "", email: "", message: "" });
const sending = ref(false);
const feedback = ref("");

const education = [
  { year: "2025-2028", institution: "EPITECH", degree: "Information Systems Architect (ASI)" },
  { year: "2022-2024", institution: "Virtual University of Côte d'Ivoire (UVCI)", degree: "Bachelor in Computer Science - Level L2" },
  { year: "2021", institution: "Baccalaureate Obtained" },
];

const projects = [
  {
    title: "AI Automation System",
    description: "Automation of email and task workflows using AI integration (ChatGPT + Zapier).",
    meta: "Feb 2024 • Tools: Zapier, ChatGPT, Gmail API",
    link: "https://zapier.com/app/assets/zaps",
    image: zapier,
  },
  {
    title: "Malware License Sales Website",
    description: "E-commerce platform prototype to simulate secure sales of digital software keys.",
    meta: "Oct 2025 • Techs: HTML, CSS, JS",
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-NAN_joseph-marie-bile.git",
    image: malware,
  },
  {
    title: "Job Web Platform",
    description: "Full-stack job-matching platform allowing recruiters and candidates to connect easily.",
    meta: "Sep 2025 • Techs: Vue.js, Node.js, Express, Sequelize, MariaDB",
    link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-NAN_5.git",
    image: jobdeed,
  },
];


// Fonction EmailJS
function onSubmit() {
  sending.value = true;
  feedback.value = "";

  emailjs
    .send(
      "service_6no14mc",
      "my_template_ID",
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      "my_public_key"
    )
    .then(() => {
      feedback.value = "Message envoyé avec succès ! ✅";
      form.value = { name: "", email: "", message: "" };
    })
    .catch(() => {
      feedback.value = "Erreur lors de l'envoi. ❌ Veuillez réessayer.";
    })
    .finally(() => {
      sending.value = false;
    });
}

</script>











<style scoped>

html {
  scroll-behavior: smooth;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}

.accent {
  color: #0b74de;
  font-size: 40px;
}

.section-spacing {
  padding: 80px 0;
}

.border {
  border: 1px solid #ddd;
  border-radius: 10px;
}

.transition-smooth {
  transition: all 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.03);
}

.profile-card {
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: auto;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-success {
  color: #2e7d32;
}

.text-error {
  color: #d32f2f;
}

</style>
