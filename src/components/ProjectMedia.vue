<template>
  <div class="media" :class="mode">
    <img v-if="mode !== 'cover'" class="media-backdrop" :src="project.image" alt="" aria-hidden="true" loading="lazy" />
    <img
      class="media-img"
      :src="project.image"
      alt=""
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
    />
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: { type: Object, required: true },
  // "framed": show the whole image (no crop) on a blurred backdrop
  framed: { type: Boolean, default: false },
  eager: { type: Boolean, default: false },
});

// logo   → square logos, centered on a blurred copy of themselves
// framed → screenshots/diagrams shown uncropped
// cover  → screenshots/diagrams filling the frame
const mode = computed(() => {
  if (props.project.imageFit === "contain") return "logo";
  return props.framed ? "framed" : "cover";
});
</script>

<style scoped>
.media {
  position: relative;
  overflow: hidden;
  background: var(--surface-2);
  isolation: isolate;
}

.media-backdrop {
  position: absolute;
  inset: -25%;
  width: 150%;
  height: 150%;
  object-fit: cover;
  filter: blur(36px) saturate(1.5);
  opacity: 0.5;
  z-index: -1;
}

.media-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease-out);
}

.framed .media-img {
  inset: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  object-fit: contain;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.35));
}

.logo .media-img {
  inset: 0;
  margin: auto;
  width: auto;
  height: 64%;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 18px;
  filter: drop-shadow(0 16px 28px rgba(0, 0, 0, 0.35));
}
</style>
