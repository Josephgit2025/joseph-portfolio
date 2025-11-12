<template>
  <v-container id="projects" class="section-spacing fade-in">
    <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
      <h3 class="section-title">
        <v-icon color="primary" class="mr-3">mdi-rocket-launch</v-icon>
        Projects
      </h3>
      
      <v-row>
        <v-col 
          v-for="(project, index) in projects" 
          :key="index" 
          cols="12" 
          sm="6" 
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card 
              v-bind="props" 
              :elevation="isHovering ? 12 : 4"
              class="project-card rounded-xl h-100"
            >
              <div class="project-image-wrapper">
                <v-img :src="project.image" height="220px" cover />
                <div class="project-overlay" :class="{ 'active': isHovering }">
                  <v-btn 
                    icon 
                    size="large" 
                    color="white" 
                    :href="project.link" 
                    target="_blank"
                  >
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
              
              <v-card-text class="pa-5">
                <v-card-title class="pa-0 mb-2 text-h6">{{ project.title }}</v-card-title>
                <p class="text-body-2 mb-3">{{ project.description }}</p>
                
                <v-chip size="x-small" variant="tonal" color="primary" class="mr-1">
                  <v-icon start size="x-small">mdi-calendar</v-icon>
                  {{ project.date }}
                </v-chip>
                
                <div class="mt-3">
                  <v-chip 
                    v-for="tech in project.techs" 
                    :key="tech" 
                    size="x-small" 
                    class="mr-1 mb-1" 
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.section-spacing {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  color: #2c3e50;
}

.glass-card {
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-card {
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-overlay.active {
  opacity: 1;
}

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>
