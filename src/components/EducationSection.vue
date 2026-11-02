<template>
  <section id="education" class="section education">
    <div class="container education-grid">
      <div class="education-intro">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="My academic path."
          subtitle="From a computer science bachelor in Côte d'Ivoire to an MSc in Information Systems Architecture at EPITECH."
        />
      </div>

      <ol class="timeline">
        <li
          v-for="(edu, i) in items"
          :key="edu.year"
          class="timeline-item"
          :class="{ current: edu.current }"
          v-reveal="i * 100"
        >
          <span class="timeline-dot" aria-hidden="true" />
          <div class="timeline-card">
            <div class="timeline-meta">
              <span class="timeline-year">{{ edu.period }}</span>
              <span v-if="edu.current" class="timeline-badge">In progress</span>
            </div>
            <h3>{{ edu.institution }}</h3>
            <p v-if="edu.degree">{{ edu.degree }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/SectionHeading.vue";
import { education } from "@/data/portfolio";

const thisYear = new Date().getFullYear();

const items = education.map((edu) => {
  const [start, end] = edu.year.split(/\s*[-–]\s*/).map(Number);
  return {
    ...edu,
    period: end ? `${start} – ${end}` : String(start),
    current: Boolean(end) && start <= thisYear && thisYear <= end,
  };
});
</script>

<style scoped>
.education {
  background: linear-gradient(180deg, transparent, var(--bg-soft) 20%, var(--bg-soft) 80%, transparent);
}

.education-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: start;
}

.education-intro {
  position: sticky;
  top: calc(var(--header-h) + 32px);
}

.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 36px;
  display: grid;
  gap: 18px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--accent), var(--border) 70%);
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -36px;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--border-strong);
}

.current .timeline-dot {
  border-color: var(--accent);
  box-shadow: 0 0 0 5px var(--accent-soft);
}

.current .timeline-dot::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: var(--accent);
}

.timeline-card {
  padding: 1.4rem 1.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.25s ease, transform 0.35s var(--ease-out);
}

.timeline-card:hover {
  border-color: var(--accent-border);
  transform: translateX(4px);
}

.current .timeline-card {
  border-color: var(--accent-border);
  background: linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--surface);
}

.timeline-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.timeline-year {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent-text);
}

.timeline-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--on-accent);
}

.timeline-card h3 {
  font-family: var(--font-body);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.timeline-card p {
  margin-top: 0.35rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}

@media (max-width: 959px) {
  .education-grid {
    grid-template-columns: 1fr;
  }

  .education-intro {
    position: static;
  }
}
</style>
