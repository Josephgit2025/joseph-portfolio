<template>
  <footer class="site-footer">
    <div class="container footer-top">
      <div class="footer-brand">
        <span class="footer-mark"><img :src="profile.logo" alt="" width="22" height="26" /></span>
        <div>
          <strong>{{ profile.fullName }}</strong>
          <span>DevOps · Cloud · Backend, {{ profile.school }}</span>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Footer">
        <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`">{{ item.text }}</a>
      </nav>

      <div class="footer-socials">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          class="icon-btn"
          :aria-label="s.name"
          :target="s.href.startsWith('http') ? '_blank' : undefined"
          rel="noopener"
        >
          <v-icon :icon="s.icon" size="20" />
        </a>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ year }} {{ profile.fullName }}</span>
      <span class="footer-built">Built with Vue 3 &amp; Vuetify</span>
      <a href="#home" class="back-to-top">
        Back to top
        <v-icon :icon="mdiArrowUp" size="16" />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { mdiArrowUp } from "@mdi/js";
import { menuItems, profile, socials } from "@/data/portfolio";

const year = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  background: var(--bg-soft);
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem 2rem;
  padding-block: 2.6rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.footer-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(145deg, #f4f7f5, #cfd8d3);
  box-shadow: 0 0 0 1px var(--border);
}

.footer-brand div {
  display: flex;
  flex-direction: column;
}

.footer-brand strong {
  font-family: var(--font-display);
  font-weight: 700;
}

.footer-brand span {
  font-size: 0.85rem;
  color: var(--text-subtle);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.6rem;
}

.footer-nav a {
  font-size: 0.92rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: var(--accent-text);
}

.footer-socials {
  display: flex;
  gap: 0.5rem;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem 1.5rem;
  padding-block: 1.3rem 1.6rem;
  border-top: 1px solid var(--border);
  font-size: 0.82rem;
  color: var(--text-subtle);
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.back-to-top:hover {
  color: var(--accent-text);
}

.back-to-top .v-icon {
  transition: transform 0.25s var(--ease-out);
}

.back-to-top:hover .v-icon {
  transform: translateY(-3px);
}

@media (max-width: 700px) {
  .footer-built {
    display: none;
  }
}
</style>
