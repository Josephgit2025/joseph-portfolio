<template>
  <section id="about" class="section about">
    <div class="container">
      <SectionHeading index="01" eyebrow="About" title="Automating the path from code to production." />

      <div class="about-grid">
        <div class="about-intro" v-reveal>
          <p class="about-lead">
            Hi, I'm <strong>{{ profile.fullName }}</strong>, MSc student in Information Systems
            Architecture at <strong>{{ profile.school }}</strong>.
          </p>
          <p class="about-text">
            I build <strong>automated, containerized solutions</strong>. I'm passionate about
            <strong>DevOps, AI and backend development</strong>.
          </p>

          <dl class="stats">
            <div v-for="stat in stats" :key="stat.label" class="stat">
              <dt>{{ stat.label }}</dt>
              <dd>{{ stat.value }}</dd>
            </div>
          </dl>
        </div>

        <ul class="focus-list">
          <li v-for="(area, i) in focusAreas" :key="area.title" class="focus-card" v-reveal="i * 90">
            <span class="focus-icon"><v-icon :icon="area.icon" size="22" /></span>
            <div>
              <h3>{{ area.title }}</h3>
              <p>{{ area.text }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="stack" v-reveal>
        <h3 class="stack-title">
          <span class="mono">~/</span>tech-stack
        </h3>
        <div class="stack-grid">
          <div v-for="group in skillGroups" :key="group.title" class="stack-group">
            <h4>{{ group.title }}</h4>
            <ul>
              <li v-for="skill in group.skills" :key="skill.name" class="skill" :style="{ '--c': skill.color }">
                <span class="skill-icon"><v-icon :icon="skill.icon" size="20" /></span>
                <span class="skill-text">
                  <strong>{{ skill.name }}</strong>
                  <small>{{ skill.level }}</small>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "@/components/SectionHeading.vue";
import { profile, focusAreas, skillGroups, projects } from "@/data/portfolio";

const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);

const stats = [
  { value: projects.length, label: "Projects" },
  { value: skillCount, label: "Core technologies" },
  { value: "3+", label: "Years of study" },
];
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

.about-lead {
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  line-height: 1.55;
  color: var(--text);
}

.about-text {
  margin-top: 1.1rem;
  font-size: 1.075rem;
  line-height: 1.8;
  color: var(--text-muted);
}

.about-intro strong {
  color: var(--text);
  font-weight: 600;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 2.2rem 0 0;
}

.stat {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.35rem;
  padding: 1.1rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.25s ease, transform 0.3s var(--ease-out);
}

.stat:hover {
  border-color: var(--accent-border);
  transform: translateY(-3px);
}

.stat dd {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.6vw, 2.5rem);
  font-weight: 700;
  line-height: 1;
  color: var(--accent-text);
}

.stat dt {
  font-size: 0.85rem;
  color: var(--text-subtle);
  line-height: 1.3;
}

/* Focus areas */
.focus-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.focus-card {
  display: flex;
  gap: 1.1rem;
  padding: 1.35rem 1.4rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.25s ease, transform 0.35s var(--ease-out), background-color 0.25s ease;
}

.focus-card:hover {
  border-color: var(--accent-border);
  transform: translateX(4px);
}

.focus-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--accent-soft);
  color: var(--accent-text);
  border: 1px solid var(--accent-border);
}

.focus-card h3 {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.focus-card p {
  margin-top: 0.4rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
}

/* Tech stack */
.stack {
  margin-top: clamp(56px, 8vw, 96px);
}

.stack-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--text);
  margin-bottom: 1.25rem;
}

.stack-title .mono {
  color: var(--accent-text);
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.stack-group {
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
}

.stack-group h4 {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 1rem;
}

.stack-group ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.skill {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.55rem 0.6rem;
  margin-inline: -0.6rem;
  border-radius: 12px;
  transition: background-color 0.2s ease;
}

.skill:hover {
  background: var(--surface-2);
}

.skill-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  color: var(--c);
  background: color-mix(in srgb, var(--c) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--c) 28%, transparent);
  transition: transform 0.35s var(--ease-out);
}

.skill:hover .skill-icon {
  transform: scale(1.08) rotate(-6deg);
}

.skill-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.skill-text strong {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.skill-text small {
  font-size: 0.8rem;
  color: var(--text-subtle);
}

@media (max-width: 959px) {
  .about-grid,
  .stack-grid {
    grid-template-columns: 1fr;
  }

  .stack-grid {
    gap: 12px;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .stack-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 420px) {
  .stats {
    gap: 8px;
  }

  .stat {
    padding: 0.9rem 0.75rem;
  }

  .stat dt {
    font-size: 0.78rem;
  }
}
</style>
