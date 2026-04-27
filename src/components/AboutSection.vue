<template>
  <v-container id="about" class="section-spacing fade-in">
    <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
      <h3 class="section-title">
        <v-icon color="primary" class="mr-3">mdi-account</v-icon>
        About Me
      </h3>
      
      <v-row>
        <v-col cols="12" md="7">
          <p class="about-text">
            <strong>Hi, I'm Joseph-Marie Bilé</strong><br>
            MSc Student in Information Systems Architecture at EPITECH Nantes
          </p>
          <p class="about-text">
            I build <strong>automated, containerized solutions</strong> — Passionate about <strong>DevOps, AI and backend development</strong>, I'm looking for a <strong>2-year work-study contract starting September 2026</strong>.
          </p>

          <!-- Stats -->
          <v-row class="mt-6">
            <v-col cols="4">
              <div class="stat-box">
                <div class="stat-number">3+</div>
                <div class="stat-label">Years Study</div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="stat-box">
                <div class="stat-number">3</div>
                <div class="stat-label">Projects</div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="stat-box">
                <div class="stat-number">3</div>
                <div class="stat-label">Technologies</div>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5">
          <v-card flat class="skills-card pa-6 rounded-xl">
            <h4 class="text-h6 mb-4">
              <v-icon color="primary" class="mr-2">mdi-code-braces</v-icon>
              Technical Skills
            </h4>
            
            <div v-for="skill in skills" :key="skill.name" class="skill-item mb-4">
              <div class="d-flex align-center mb-2">
                <v-avatar size="40" class="skill-icon mr-3" :color="skill.color">
                  <v-icon :icon="skill.icon" color="white"></v-icon>
                </v-avatar>
                <div class="flex-grow-1">
                  <div class="skill-name">{{ skill.name }}</div>
                  <div class="skill-level">{{ skill.level }}</div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>




<script setup>
defineProps({
  skills: {
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
  color: var(--text-primary);
}

.glass-card {
  background: var(--card-bg) !important;
  backdrop-filter: blur(10px);
  border: 1px solid var(--card-border);
  transition: background 0.3s ease;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.stat-box {
  text-align: center;
  padding: 20px;
  background: rgba(0, 229, 160, 0.05);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 229, 160, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00e5a0 0%, #00ffb3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  margin-top: 8px;
}

.skills-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%) !important;
  border: 1px solid var(--card-border);
  height: 100%;
  transition: background 0.3s ease;
}

.skill-item {
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
}

.skill-icon {
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon {
  transform: rotate(360deg) scale(1.1);
}

.skill-name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
}

.skill-level {
  font-size: 0.85rem;
  color: var(--text-tertiary);
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
