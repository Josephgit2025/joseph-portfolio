<template>
  <article class="project-card" :class="{ featured }">
    <ProjectMedia :project="project" :framed="featured" class="card-media">
      <span v-if="featured" class="featured-badge">
        <v-icon :icon="mdiStarFourPoints" size="14" />
        Featured
      </span>
    </ProjectMedia>

    <div class="card-body">
      <div class="card-meta">
        <span class="card-category">{{ categoryLabel }}</span>
        <span class="card-sep" aria-hidden="true">/</span>
        <span>{{ project.date }}</span>
      </div>

      <h3 class="card-title">
        <button type="button" class="stretched" @click="$emit('open', project)">
          {{ project.title }}
        </button>
      </h3>

      <p class="card-summary">{{ project.summary }}</p>

      <ul v-if="featured" class="card-highlights">
        <li v-for="h in project.highlights.slice(0, 3)" :key="h">
          <v-icon :icon="mdiCheck" size="16" />
          <span>{{ h }}</span>
        </li>
      </ul>

      <ul class="card-tags" aria-label="Technologies">
        <li v-for="tag in visibleTags" :key="tag" class="tag">{{ tag }}</li>
        <li v-if="hiddenTags" class="tag tag-more">+{{ hiddenTags }}</li>
      </ul>

      <div class="card-footer">
        <span class="card-details" aria-hidden="true">
          View details
          <v-icon :icon="mdiArrowRight" size="16" />
        </span>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="icon-btn card-link"
          :aria-label="`${project.title}: ${isGithub ? 'source code on GitHub' : 'open project'}`"
          :title="isGithub ? 'View on GitHub' : 'Open project'"
        >
          <v-icon :icon="isGithub ? mdiGithub : mdiArrowTopRight" size="20" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { mdiArrowRight, mdiArrowTopRight, mdiCheck, mdiGithub, mdiStarFourPoints } from "@mdi/js";
import ProjectMedia from "@/components/ProjectMedia.vue";
import { projectCategories } from "@/data/portfolio";

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
});
defineEmits(["open"]);

const MAX_TAGS = 4;
const categoryLabel = computed(() => projectCategories[props.project.categories[0]]);
const maxTags = computed(() => (props.featured ? 6 : MAX_TAGS));
const visibleTags = computed(() => props.project.tags.slice(0, maxTags.value));
const hiddenTags = computed(() => Math.max(0, props.project.tags.length - maxTags.value));
const isGithub = computed(() => props.project.link?.includes("github.com"));
</script>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  transition: transform 0.45s var(--ease-out), border-color 0.3s ease, box-shadow 0.45s var(--ease-out);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-border);
  box-shadow: 0 30px 60px -32px var(--accent-glow);
}

.project-card:has(.stretched:focus-visible) {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.card-media {
  aspect-ratio: 16 / 10;
  border-bottom: 1px solid var(--border);
}

.project-card:hover :deep(.media-img) {
  transform: scale(1.04);
}

.featured-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--on-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.4rem 1.2rem;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-subtle);
}

.card-category {
  color: var(--accent-text);
}

.card-sep {
  opacity: 0.6;
}

.card-title {
  margin-top: 0.7rem;
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.015em;
}

.stretched {
  all: unset;
  cursor: pointer;
  color: var(--text);
  transition: color 0.2s ease;
}

.stretched::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
}

.project-card:hover .stretched {
  color: var(--accent-text);
}

.card-summary {
  margin-top: 0.6rem;
  font-size: 0.94rem;
  line-height: 1.65;
  color: var(--text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-highlights {
  list-style: none;
  margin: 1.1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
}

.card-highlights li {
  display: flex;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.card-highlights .v-icon {
  flex: none;
  margin-top: 0.15rem;
  color: var(--accent-text);
}

.card-tags {
  list-style: none;
  margin: 1.1rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag-more {
  color: var(--accent-text);
}

.card-footer {
  margin-top: auto;
  padding-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-details {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
}

.card-details .v-icon {
  color: var(--accent-text);
  transition: transform 0.3s var(--ease-out);
}

.project-card:hover .card-details .v-icon {
  transform: translateX(4px);
}

.card-link {
  position: relative;
  z-index: 2;
}

/* Featured: wide horizontal card */
.featured {
  grid-column: 1 / -1;
  flex-direction: row;
}

.featured .card-media {
  flex: 1.25;
  aspect-ratio: auto;
  min-height: 360px;
  border-bottom: 0;
  border-right: 1px solid var(--border);
}

.featured .card-body {
  flex: 1;
  padding: clamp(1.6rem, 3vw, 2.4rem);
}

.featured .card-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  font-weight: 700;
  line-height: 1.15;
}

.featured .card-summary {
  -webkit-line-clamp: unset;
  font-size: 1rem;
}

@media (max-width: 959px) {
  .featured {
    flex-direction: column;
  }

  .featured .card-media {
    flex: none;
    aspect-ratio: 16 / 10;
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }
}
</style>
