<template>
  <v-app>
    <!-- Header -->
    <v-app-bar color="white" flat elevate-on-scroll app>
      <v-container class="d-flex align-center justify-space-between">
        <v-toolbar-title>
          <v-img :src="Log" alt="Logo de mon portfolio" contain max-height="50" max-width="50"></v-img>
        </v-toolbar-title>

        
        <div class="d-none d-md-flex">
          <v-btn v-for="item in menuItems" :key="item.text" :href="item.href" outlined color="primary" class="mx-1" variant="outlined" rounded="xl">
            {{ item.text }}
          </v-btn>
        </div>

        
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    
    <v-navigation-drawer v-model="drawer" temporary app class="d-md-none">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.text" :href="item.href" @click="drawer = false">
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main -->
    <v-main>
      <!-- home -->
      <v-container id="home" class="section-spacing">
        <v-row align="center">
          <v-col cols="12" md="7">
            <h2 class="text-h4 text-md-h3 font-weight-bold">
              Hello, I’m <span class="accent">Joseph-Marie Bilé</span>
            </h2>
            <h2 class="text-subtitle-3 mb-6">
              Computer Science Student at EPITECH Nantes
            </h2>
            <v-btn outlined color="primary" class="mr-3" href="#projects" rounded="xl">
              See my projects
            </v-btn>
            <v-btn outlined color="primary" href="#contact" rounded="xl">
              Contact me
            </v-btn>
          </v-col>

          <v-col cols="12" md="5">
            <v-card elevation="3" class="d-flex justify-center align-center" style="border-radius: 50%; overflow: hidden; width: 300px; height: 300px; margin: auto;">
              <v-img :src="Josh" alt="ma photo de profil" height="400" cover></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>




      <!-- About -->
      <v-container id="about" class="section-spacing">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="text-h5 mb-4 section-title" style="size: 25px;">About</h3>
          <v-row>
            <v-col cols="12" md="8">
              <p>
                Student in Computer Science at EPITECH Nantes (BAC+5), passionate about cybersecurity and artificial intelligence. <br/>
                I am looking for an internship /work-study starting from January 2026 in order to develop my skills and also efficient and automated technological solutions.<br/>
                My work method is mainly based on analysis, research, and curiosity.
              </p>
            </v-col>

            <v-col cols="12" md="4">
              <v-card flat class="pa-4 rounded-lg border">
                <h4 class="text-h6 section-title">Skills</h4>
                <v-list density="compact">
                  <v-list-item>Linux ( Parrot / Debian )</v-list-item>
                  <v-list-item>Java, Bash</v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>




      <!-- Education -->
      <v-container id="education" class="section-spacing">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="text-h5 mb-4 section-title">Education</h3>
          <v-timeline density="compact">
            <v-timeline-item v-for="(edu, index) in education" :key="index" color="primary" dot-color="primary"
              size="small">
              <v-card flat>
                <v-card-subtitle class="text-black">{{ edu.year }}</v-card-subtitle>
                <v-card-title class="text-h5">{{ edu.institution }}</v-card-title>
                <v-card-text v-if="edu.degree" class="text-h6">{{ edu.degree }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-container>




      <!-- Projects -->
      <v-container id="projects" class="section-spacing">
        <v-card flat class="pa-6 rounded-xl" elevation="2">
          <h3 class="text-h5 mb-4 section-title">Projects</h3>
          <v-row>
            <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="transition-smooth rounded-xl">
                  <v-img :src="project.image" height="180px" cover></v-img>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-text>{{ project.description }}</v-card-text>
                  <v-card-subtitle class="text-grey">{{ project.meta }}</v-card-subtitle>
                  <v-card-actions>
                    <v-btn outlined color="primary" :href="project.link" rounded="xl">
                      See More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card>
      </v-container>




      <!-- Contact -->
      <v-container id="contact" class="section-spacing">
        <v-row>
          <v-col cols="12" md="8">
            <v-card flat class="pa-6 rounded-xl" elevation="2">
              <h3 class="text-h5 mb-4 section-title">Contact</h3>
              <v-form @submit.prevent="onSubmit">
                <v-text-field label="Name" v-model="form.name" variant="outlined" class="mb-3"></v-text-field>
                <v-text-field label="Email" v-model="form.email" type="email" variant="outlined"
                  class="mb-3"></v-text-field>
                <v-textarea label="Message" v-model="form.message" variant="outlined" class="mb-3"></v-textarea>
                <v-btn outlined color="primary" type="submit" rounded="xl">
                  Send
                </v-btn>
              </v-form>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card flat class="pa-6 rounded-xl" elevation="2">
              <h4 class="text-h5 mb-3 section-title">Join</h4> <br/>
              <p><strong>Email: </strong><a href="mailto:joseph-marie.bile@epitech.eu" target="_blank">Joseph-marie.bile@epitech.eu </a></p> <br/>
              <p><strong>GitHub:</strong> <a href="https://github.com/Josephgit2025" target="_blank">Josephgit2025</a></p> <br/>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/joseph-marie-bilé-283470385" target="_blank">Joseph-Marie Bilé</a></p> <br/>
              <v-btn outlined color="black" class="mt-4" href="/public/CV_Joseph_Marie_Bile_STAR.pdf" download variant="outlined" rounded="xl">
                Download CV
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>


    <!--  Footer -->
    <v-footer color="white" flat class="pa-4">
      <v-container class="text-center">
        <p>© {{ year }} Joseph-Marie</p>
      </v-container>
    </v-footer>
  </v-app>
</template>








<script setup>

import { ref } from "vue";
import Log from "@/img/Log.png"
import Josh from "@/img/Josh.jpg";
import malware from "@/img/malware.jpg";
import jobdeed from "@/img/jobdeed.jpg";
import zapier from "@/img/zapier.jpeg";


// variables ( elles sont censées être réactives, enfin normalement)
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

const education = [
  { year: "2025-2028", institution: "EPITECH", degree: "Information Systems Architect (ASI)" },
  { year: "2022-2024", institution: "Virtual University of Côte d'Ivoire (UVCI)", degree: "Bachelor in Computer Science - Level L2" },
  { year: "2021", institution: "Baccalaureate Obtained" },
];

const projects = [
  { title: "AI Automation System", description: "...", meta: "Feb 2024 • Tools used: Zapier, ChatGPT, Gmail", link: "https://zapier.com/app/assets/zaps", image: zapier },
  { title: "Website for the sale of malware licenses", description: "...", meta: "Oct 2025 • Techs: HTML, CSS", link: "https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-NAN_joseph-marie-bile.git", image: malware },
  { title: "Job Web Platform", description: "...", meta: "Sep 2025 • Techs: Vue Js, Node Js, Express, MariaDB, Sequelize", link: "https://github.com/EpitechMscProPromo2028/T-WEB-501-NAN_5.git", image: jobdeed },
];


// Pour le formulaire

function onSubmit() {
  alert(`Thank you ${form.value.name || "—"}, message received!`);
  form.value = { name: "", email: "", message: "" };
}
</script>






<style scoped>


.section-title {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-align: center;
}

.accent {
  color: #0b74de;
  font-size: 40px;
}

.section-spacing {
  padding-top: 80px;
  padding-bottom: 80px;
}

.transition-smooth {
  transition: all 0.3s ease;
}

a {
  color: #0b74de;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.border {
  border: 1px solid #ddd;
  border-radius: 10px;
}

</style>