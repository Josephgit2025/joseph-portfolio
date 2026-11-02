<template>
  <header class="section-heading" :class="{ centered }" v-reveal>
    <span class="eyebrow">
      <span class="eyebrow-index">{{ index }}</span>
      {{ eyebrow }}
    </span>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({
  index: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: "" },
  centered: { type: Boolean, default: false },
});
</script>

<style scoped>
.section-heading {
  max-width: 680px;
  margin-bottom: clamp(36px, 5vw, 56px);
}

.section-heading.centered {
  margin-inline: auto;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-text);
}

.eyebrow::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
  opacity: 0.6;
}

.centered .eyebrow::before {
  display: none;
}

.eyebrow-index {
  color: var(--text-subtle);
}

.section-title {
  margin-top: 0.9rem;
  font-size: clamp(2rem, 4.6vw, 3.1rem);
  font-weight: 700;
  line-height: 1.08;
}

.section-subtitle {
  margin-top: 1rem;
  font-size: 1.075rem;
  line-height: 1.7;
  color: var(--text-muted);
}
</style>
