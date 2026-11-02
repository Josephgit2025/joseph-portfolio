<template>
  <v-app :theme="isDark ? 'dark' : 'light'">
    <a href="#main" class="skip-link">Skip to content</a>

    <AppHeader :is-dark="isDark" @toggle-theme="toggleTheme" />

    <main id="main">
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { useTheme } from "@/composables/useTheme";

import AppHeader from "@/components/AppHeader.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import AppFooter from "@/components/AppFooter.vue";

const { isDark, toggleTheme } = useTheme();
</script>
