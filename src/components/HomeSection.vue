<template>
  <v-container id="home" class="home-section fade-in">
    <v-row align="center" class="min-height-screen">
      <v-col cols="12" md="7" class="text-center text-md-left">
        <div class="home-badge mb-4"> </div>
        
        <h1 class="home-title mb-4">
          Hello, I'm <br>
          <span class="accent-gradient">Joseph-Marie Bilé</span>
        </h1>
        
        <h2 class="home-subtitle mb-6">
          <v-icon color="primary" class="mr-2">mdi-school</v-icon>
          Computer Science Student at EPITECH Nantes
        </h2>
        
        <p class="home-description mb-8">
          Passionate about cybersecurity and artificial intelligence, 
          creating efficient and automated technological solutions.
        </p>
        
        <div class="home-actions">
          <v-btn 
            color="primary" 
            size="large" 
            href="#projects" 
            rounded="xl" 
            variant="flat" 
            class="mr-3 btn-primary"
          >
            <v-icon start>mdi-rocket-launch</v-icon>
            See my projects
          </v-btn>
          <v-btn 
            color="primary" 
            size="large" 
            href="#contact" 
            rounded="xl" 
            variant="outlined"
            class="btn-secondary"
          >
            <v-icon start>mdi-email</v-icon>
            Contact me
          </v-btn>
        </div>

        <!-- Social Links -->
        <div class="social-links mt-8">
          <v-btn 
            icon 
            variant="text" 
            href="https://github.com/Josephgit2025" 
            target="_blank" 
            class="social-btn"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn 
            icon 
            variant="text" 
            href="https://www.linkedin.com/in/joseph-marie-bilé-283470385" 
            target="_blank" 
            class="social-btn"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn 
            icon 
            variant="text" 
            href="mailto:joseph-marie.bile@epitech.eu" 
            class="social-btn"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="d-flex justify-center">
        <div class="profile-wrapper">
          <div class="profile-bg-circle"></div>
          <v-card elevation="8" class="profile-card">
            <v-img :src="profileImage" alt="Photo de profil" height="400" cover />
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <v-icon class="scroll-arrow">mdi-chevron-down</v-icon>
    </div>
  </v-container>
</template>




<script setup>
defineProps({
  profileImage: {
    type: String,
    required: true
  }
});
</script>




<style scoped>
.home-section {
  padding: 120px 0 80px 0;
}

.min-height-screen {
  min-height: calc(100vh - 120px);
}

.home-badge {
  animation: fadeInDown 0.8s ease;
}

.home-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  animation: fadeInUp 0.8s ease;
}

.accent-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  color: #666;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.home-description {
  font-size: 1.1rem;
  color: #777;
  max-width: 600px;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.home-actions {
  animation: fadeInUp 0.8s ease 0.6s both;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  border: 2px solid;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
}

.social-links {
  animation: fadeInUp 0.8s ease 0.8s both;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.1);
}

.profile-wrapper {
  position: relative;
  animation: fadeInRight 1s ease;
}

.profile-bg-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  opacity: 0.1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 3s ease-in-out infinite;
}

.profile-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  width: 320px;
  height: 400px;
  margin: auto;
  transition: all 0.5s ease;
  border: 4px solid #fff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.profile-card:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 25px 70px rgba(102, 126, 234, 0.3);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  font-size: 2rem;
  color: #667eea;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

@media (max-width: 960px) {
  .home-title {
    font-size: 2.5rem;
  }
  
  .home-subtitle {
    font-size: 1.1rem;
  }
  
  .profile-card {
    width: 280px;
    height: 350px;
  }
  
  .profile-bg-circle {
    width: 320px;
    height: 320px;
  }
}
</style>
