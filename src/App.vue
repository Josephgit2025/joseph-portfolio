<template>
  <v-app :theme="isDark ? 'dark' : 'light'">
    <!-- HEADER -->
    <AppHeader 
      :logo="Log" 
      :menuItems="menuItems" 
      @toggle-drawer="drawer = !drawer"
      @toggle-theme="toggleTheme"
      :isDark="isDark"
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
import { ref, onMounted } from "vue";
import { useTheme } from "@/composables/useTheme";

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
import Josh from "@/img/Josh.JPG";

// Theme
const { isDark, toggleTheme, loadThemePreference } = useTheme();

onMounted(() => {
  loadThemePreference();
});

// State
const drawer = ref(false);
</script>






<style scoped>
.main-bg {
  background: var(--bg-gradient);
  transition: background 0.3s ease;
  color: var(--text-primary);
}
</style>

<style>
* { font-family: 'DM Sans', sans-serif; }
h1, h2, h3, .home-title, .section-title { font-family: 'Syne', sans-serif; }

/* Styles globales pour le mode sombre */
html {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

#app {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* Styles light-mode pour toute la page */
.light-mode {
  background-color: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

.light-mode * {
  color: var(--text-primary) !important;
}

.light-mode .main-bg {
  background-color: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

.light-mode .glass-card {
  background: var(--card-bg) !important;
  border-color: var(--card-border) !important;
  color: var(--text-primary) !important;
}

.light-mode .skills-card {
  background: rgba(0, 179, 122, 0.05) !important;
}

.light-mode .v-card {
  background: var(--card-bg) !important;
  color: var(--text-primary) !important;
}

.light-mode .v-btn {
  color: var(--text-primary) !important;
}

.light-mode .v-text-field {
  color: var(--text-primary) !important;
}

.light-mode .v-textarea {
  color: var(--text-primary) !important;
}

.light-mode .section-title {
  color: var(--text-primary) !important;
}

.light-mode .home-title {
  color: var(--text-primary) !important;
}

.light-mode .home-subtitle {
  color: var(--text-secondary) !important;
}

.light-mode .home-description {
  color: var(--text-tertiary) !important;
}

.light-mode .about-text {
  color: var(--text-secondary) !important;
}

.light-mode .stat-label {
  color: var(--text-tertiary) !important;
}
</style>