<template>
  <v-navigation-drawer v-model="isOpen" temporary app class="d-md-none">
    <v-list>
      <v-list-item 
        v-for="item in menuItems" 
        :key="item.text" 
        :href="item.href" 
        @click="closeDrawer"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  menuItems: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const closeDrawer = () => {
  isOpen.value = false;
};
</script>
