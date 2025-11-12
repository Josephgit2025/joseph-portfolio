<template>
  <v-app>
    <!-- HEADER -->
    <AppHeader 
      :logo="Log" 
      :menuItems="menuItems" 
      @toggle-drawer="drawer = !drawer" 
    />

    <!-- NAVIGATION DRAWER -->
    <NavigationDrawer 
      v-model="drawer" 
      :menuItems="menuItems" 
    />

    <!-- MAIN -->
    <v-main class="main-bg">
      <!-- HOME -->
      <HomeSection :profileImage="Josh" />

      <!-- ABOUT -->
      <AboutSection :skills="skills" />

      <!-- EDUCATION -->
      <EducationSection :education="education" />

      <!-- PROJECTS -->
      <ProjectsSection :projects="projects" />

      <!-- CONTACT -->
      <ContactSection />
    </v-main>

    <!-- FOOTER -->
    <AppFooter :logo="Log" />
  </v-app>
</template>






<script setup>
import { ref } from "vue";

// Components
import AppHeader from "@/components/AppHeader.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import AppFooter from "@/components/AppFooter.vue";

// Data
import { menuItems, skills, education, projects } from "@/data/portfolio";

// Images
import Log from "@/img/Log.png";
import Josh from "@/img/Josh.jpg";

// State
const drawer = ref(false);
</script>






<style scoped>
.main-bg {
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
}
</style>