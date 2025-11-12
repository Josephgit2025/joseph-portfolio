<template>
  <v-app-bar color="transparent" flat elevate-on-scroll app class="glass-header">
    <v-container class="d-flex align-center justify-space-between">
      <v-toolbar-title class="logo-title">
        <v-img :src="logo" alt="Logo du portfolio" contain max-height="50" max-width="50" />
      </v-toolbar-title>

      <div class="d-none d-md-flex">
        <v-btn 
          v-for="item in menuItems" 
          :key="item.text" 
          :href="item.href" 
          color="primary" 
          variant="text"
          class="mx-1 nav-btn"
        >
          {{ item.text }}
        </v-btn>
      </div>

      <v-app-bar-nav-icon class="d-md-none" @click="$emit('toggle-drawer')" />
    </v-container>
  </v-app-bar>
</template>




<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  },
  menuItems: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['toggle-drawer']);
</script>




<style scoped>
.glass-header {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-btn {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  transform: translateY(-2px);
}
</style>
