<template>
  <v-dialog v-model="open" :max-width="880" :fullscreen="xs" transition="dialog-bottom-transition">
    <article v-if="project" class="dialog" :aria-label="project.title">
      <button type="button" class="icon-btn dialog-close" aria-label="Close" @click="open = false">
        <v-icon :icon="mdiClose" size="20" />
      </button>

      <ProjectMedia :project="project" framed eager class="dialog-media" />

      <div class="dialog-body">
        <div class="dialog-meta">
          <span v-for="c in project.categories" :key="c" class="dialog-category">{{ projectCategories[c] }}</span>
          <span class="dialog-date">
            <v-icon :icon="mdiCalendarBlankOutline" size="15" />
            {{ project.date }}
          </span>
        </div>

        <h2 class="dialog-title">{{ project.title }}</h2>
        <p class="dialog-description">{{ project.description }}</p>

        <div class="dialog-columns">
          <section>
            <h3 class="dialog-heading">Highlights</h3>
            <ul class="dialog-highlights">
              <li v-for="h in project.highlights" :key="h">
                <v-icon :icon="mdiCheck" size="17" />
                <span>{{ h }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="dialog-heading">Tech stack</h3>
            <dl class="dialog-stack">
              <div v-for="row in project.stack" :key="row.label" class="stack-row">
                <dt>{{ row.label }}</dt>
                <dd>
                  <span v-for="item in row.items" :key="item" class="tag">{{ item }}</span>
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <div class="dialog-actions">
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener" class="btn btn-primary">
            <v-icon :icon="isGithub ? mdiGithub : mdiArrowTopRight" size="18" />
            {{ isGithub ? "View on GitHub" : "Open project" }}
          </a>
          <button type="button" class="btn btn-ghost" @click="open = false">Close</button>
        </div>
      </div>
    </article>
  </v-dialog>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { mdiArrowTopRight, mdiCalendarBlankOutline, mdiCheck, mdiClose, mdiGithub } from "@mdi/js";
import ProjectMedia from "@/components/ProjectMedia.vue";
import { projectCategories } from "@/data/portfolio";

const props = defineProps({
  project: { type: Object, default: null },
});

const open = defineModel({ type: Boolean, default: false });
const { xs } = useDisplay();
const isGithub = computed(() => props.project?.link?.includes("github.com"));
</script>

<style scoped>
.dialog {
  position: relative;
  max-height: calc(100vh - 48px);
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  overscroll-behavior: contain;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-strong);
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.6);
}

.v-dialog--fullscreen .dialog {
  max-height: none;
  height: 100%;
  border-radius: 0;
  border: 0;
}

.dialog-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  background: var(--surface-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text);
}

.dialog-media {
  aspect-ratio: 16 / 8;
  border-bottom: 1px solid var(--border);
}

.dialog-body {
  padding: clamp(1.4rem, 4vw, 2.4rem);
}

.dialog-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.dialog-category {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  color: var(--accent-text);
}

.dialog-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-subtle);
}

.dialog-title {
  margin-top: 1rem;
  font-size: clamp(1.5rem, 3.4vw, 2.1rem);
  font-weight: 700;
  line-height: 1.15;
}

.dialog-description {
  margin-top: 0.9rem;
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-muted);
}

.dialog-columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.dialog-heading {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 1rem;
}

.dialog-highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.dialog-highlights li {
  display: flex;
  gap: 0.65rem;
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--text);
}

.dialog-highlights .v-icon {
  flex: none;
  margin-top: 0.15rem;
  color: var(--accent-text);
}

.dialog-stack {
  margin: 0;
  display: grid;
  gap: 0.85rem;
}

.stack-row dt {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.4rem;
}

.stack-row dd {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-row .tag {
  white-space: normal;
  line-height: 1.3;
}

.dialog-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.2rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 700px) {
  .dialog-columns {
    grid-template-columns: 1fr;
  }

  .dialog-media {
    aspect-ratio: 16 / 10;
  }
}
</style>
