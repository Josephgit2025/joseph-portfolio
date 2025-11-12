<template>
  <v-footer class="footer-gradient pa-8">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="footer-logo mb-3">
            <v-img :src="logo" alt="Logo" contain max-height="40" max-width="40" />
          </div>
          <p class="text-caption text-grey">© {{ year }} Joseph-Marie Bilé. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>




<script setup>
import { computed } from 'vue';

defineProps({
  logo: {
    type: String,
    required: true
  }
});

const year = computed(() => new Date().getFullYear());
</script>




<style scoped>
.footer-gradient {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.footer-logo {
  display: inline-block;
}

@media (min-width: 960px) {
  .footer-social {
    justify-content: flex-end;
  }
}
</style>