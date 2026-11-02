<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="projects-head">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work."
          subtitle="Clusters, pipelines and applications I've designed and built, most recent first."
        />

        <div class="filters" role="group" aria-label="Filter projects by category" v-reveal="100">
          <button
            v-for="f in filters"
            :key="f.key"
            type="button"
            class="filter"
            :class="{ active: current === f.key }"
            :aria-pressed="current === f.key"
            @click="current = f.key"
          >
            {{ f.label }}
            <span class="filter-count">{{ f.count }}</span>
          </button>
        </div>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="(project, i) in visible"
          :key="project.title"
          v-reveal="(i % 3) * 90"
          :project="project"
          :featured="project.featured"
          @open="openProject"
        />
      </div>
    </div>

    <ProjectDialog v-model="dialogOpen" :project="selected" />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ProjectDialog from "@/components/ProjectDialog.vue";
import { projects, projectCategories } from "@/data/portfolio";

// Featured first, then most recent first
const sorted = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.sortKey.localeCompare(a.sortKey)
);

const filters = [
  { key: "all", label: "All", count: projects.length },
  ...Object.entries(projectCategories).map(([key, label]) => ({
    key,
    label,
    count: projects.filter((p) => p.categories.includes(key)).length,
  })),
];

const current = ref("all");
const visible = computed(() =>
  current.value === "all" ? sorted : sorted.filter((p) => p.categories.includes(current.value))
);

const selected = ref(null);
const dialogOpen = ref(false);
const openProject = (project) => {
  selected.value = project;
  dialogOpen.value = true;
};
</script>

<style scoped>
.projects-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0 2rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: clamp(36px, 5vw, 56px);
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 40px;
  padding: 0 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.filter:hover {
  color: var(--text);
  border-color: var(--border-strong);
}

.filter.active {
  color: var(--on-accent);
  background: var(--accent);
  border-color: var(--accent);
}

.filter-count {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.1rem 0.4rem;
  border-radius: 6px;
  background: var(--surface-2);
  color: var(--text-subtle);
}

.filter.active .filter-count {
  background: rgba(3, 20, 13, 0.14);
  color: var(--on-accent);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 1023px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 639px) {
  .project-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-inline: calc(-1 * clamp(16px, 4vw, 32px));
    padding-inline: clamp(16px, 4vw, 32px);
    scrollbar-width: none;
  }

  .filters::-webkit-scrollbar {
    display: none;
  }

  .filter {
    flex: none;
  }
}
</style>
