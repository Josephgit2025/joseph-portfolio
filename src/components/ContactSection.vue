<template>
  <v-container id="contact" class="section-spacing fade-in">
    <v-row>
      <v-col cols="12" md="7">
        <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
          <h3 class="section-title text-left">
            <v-icon color="primary" class="mr-3">mdi-message</v-icon>
            Send a Message
          </h3>
          
          <v-form @submit.prevent="handleSubmit">
            <v-text-field 
              label="Your Name" 
              v-model="localForm.name" 
              variant="outlined" 
              class="mb-3" 
              required
              prepend-inner-icon="mdi-account"
              rounded="lg"
            />
            
            <v-text-field 
              label="Your Email" 
              v-model="localForm.email" 
              type="email" 
              variant="outlined" 
              class="mb-3"
              required
              prepend-inner-icon="mdi-email"
              rounded="lg"
            />
            
            <v-textarea 
              label="Your Message" 
              v-model="localForm.message" 
              variant="outlined" 
              class="mb-3" 
              required
              prepend-inner-icon="mdi-message-text"
              rows="5"
              rounded="lg"
            />

            <v-btn 
              color="primary" 
              type="submit" 
              size="large"
              rounded="xl" 
              variant="flat"
              :loading="sending"
              class="btn-primary"
            >
              <v-icon start>mdi-send</v-icon>
              Send Message
            </v-btn>

            <v-alert 
              v-if="feedback" 
              :type="feedback.includes('✅') ? 'success' : 'error'"
              class="mt-4"
              rounded="lg"
              variant="tonal"
            >
              {{ feedback }}
            </v-alert>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card flat class="glass-card pa-8 rounded-xl" elevation="0">
          <h4 class="section-title text-left">
            <v-icon color="primary" class="mr-2">mdi-information</v-icon>
            Contact Info
          </h4>
          

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

          <v-divider class="my-6"></v-divider>

          <v-btn 
            block
            color="primary" 
            size="large"
            href="/public/mon_cv.pdf" 
            download
            rounded="xl"
            variant="flat"
            class="btn-primary"
          >
            <v-icon start>mdi-download</v-icon>
            Download CV
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>




<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const localForm = ref({ name: '', email: '', message: '' });
const sending = ref(false);
const feedback = ref('');

const handleSubmit = () => {
  sending.value = true;
  feedback.value = '';

  emailjs
    .send(
      'service_6no14mc',
      'my_template_ID',
      {
        from_name: localForm.value.name,
        from_email: localForm.value.email,
        message: localForm.value.message,
      },
      'my_public_key'
    )
    .then(() => {
      feedback.value = 'Message envoyé avec succès ! ✅';
      localForm.value = { name: '', email: '', message: '' };
    })
    .catch(() => {
      feedback.value = 'Erreur lors de l\'envoi. ❌ Veuillez réessayer.';
    })
    .finally(() => {
      sending.value = false;
    });
};
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

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(102, 126, 234, 0.05);
  transform: translateX(5px);
}

.contact-label {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 4px;
}

.contact-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: #764ba2;
  text-decoration: underline;
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
