<template>
  <v-container id="education" class="section-spacing fade-in">
    <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
      <h3 class="section-title">
        <v-icon color="primary" class="mr-3">mdi-school</v-icon>
        Education
      </h3>
      
      <v-timeline side="end" density="compact" class="custom-timeline">
        <v-timeline-item 
          v-for="(edu, index) in education" 
          :key="index" 
          dot-color="primary" 
          size="small"
        >
          <template v-slot:icon>
            <v-icon color="white" size="small">mdi-school</v-icon>
          </template>
          
          <v-card flat class="education-card pa-4 rounded-lg" elevation="2">
            <v-chip color="primary" size="small" class="mb-2">{{ edu.year }}</v-chip>
            <h4 class="text-h6 mb-1">{{ edu.institution }}</h4>
            <p v-if="edu.degree" class="text-body-2 text-grey">{{ edu.degree }}</p>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>




<script setup>
defineProps({
  education: {
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

.custom-timeline {
  margin-top: 30px;
}

.education-card {
  transition: all 0.3s ease;
  border-left: 3px solid #667eea;
}

.education-card:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
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
