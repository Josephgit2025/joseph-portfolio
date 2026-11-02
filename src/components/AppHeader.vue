<template>
  <header class="site-header" :class="{ scrolled: scrolled || menuOpen }">
    <div class="progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true" />

    <div class="container header-inner">
      <a href="#home" class="brand" aria-label="Joseph-Marie Bilé, back to top" @click="menuOpen = false">
        <span class="brand-mark"><img :src="profile.logo" alt="" width="22" height="26" /></span>
        <span class="brand-name">{{ profile.firstName }}<span class="brand-dot">.</span></span>
      </a>

      <nav class="nav" aria-label="Main">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: active === item.id }"
          :aria-current="active === item.id ? 'true' : undefined"
        >
          {{ item.text }}
        </a>
      </nav>

      <div class="header-actions">
        <button
          type="button"
          class="icon-btn"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="isDark ? 'Light theme' : 'Dark theme'"
          @click="$emit('toggle-theme')"
        >
          <v-icon :icon="isDark ? mdiWeatherSunny : mdiWeatherNight" size="20" />
        </button>

        <a :href="profile.cv" :download="profile.cvFileName" class="btn btn-primary btn-sm header-cv">
          <v-icon :icon="mdiTrayArrowDown" size="18" />
          CV
        </a>

        <button
          type="button"
          class="icon-btn menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <v-icon :icon="menuOpen ? mdiClose : mdiMenu" size="22" />
        </button>
      </div>
    </div>

  </header>

  <!-- Kept outside <header>: its backdrop-filter would trap position: fixed -->
  <Transition name="menu">
    <div v-if="menuOpen" id="mobile-menu" class="mobile-menu">
      <nav class="container mobile-nav" aria-label="Mobile">
        <a
          v-for="(item, i) in menuItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="mobile-link"
          :class="{ active: active === item.id }"
          :style="{ '--i': i }"
          @click="menuOpen = false"
        >
          <span class="mobile-index">0{{ i + 1 }}</span>
          {{ item.text }}
        </a>

        <div class="mobile-footer">
          <a :href="profile.cv" :download="profile.cvFileName" class="btn btn-primary">
            <v-icon :icon="mdiTrayArrowDown" size="18" />
            Download CV
          </a>
          <div class="mobile-socials">
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
      </nav>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { mdiClose, mdiMenu, mdiTrayArrowDown, mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
import { menuItems, profile, socials } from "@/data/portfolio";
import { useScrollSpy } from "@/composables/useScrollSpy";

defineProps({
  isDark: { type: Boolean, default: true },
});
defineEmits(["toggle-theme"]);

const menuOpen = ref(false);
const { active, progress, scrolled } = useScrollSpy(["home", ...menuItems.map((m) => m.id)]);

// Lock page scroll while the mobile menu is open
watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? "hidden" : "";
});

const onKey = (e) => {
  if (e.key === "Escape") menuOpen.value = false;
};
const onResize = () => {
  if (window.innerWidth >= 960) menuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("keydown", onKey);
  window.addEventListener("resize", onResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  height: var(--header-h);
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
}

.site-header.scrolled {
  background: var(--header-bg);
  border-bottom-color: var(--border);
  backdrop-filter: saturate(160%) blur(16px);
  -webkit-backdrop-filter: saturate(160%) blur(16px);
}

.progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-strong));
  transform-origin: left;
  transform: scaleX(0);
  pointer-events: none;
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Brand */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--text);
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: linear-gradient(145deg, #f4f7f5, #cfd8d3);
  box-shadow: 0 0 0 1px var(--border), 0 6px 18px -8px var(--accent-glow);
  transition: transform 0.3s var(--ease-out);
}

.brand:hover .brand-mark {
  transform: rotate(-6deg) scale(1.05);
}

.brand-mark img {
  display: block;
  width: 22px;
  height: auto;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.brand-dot {
  color: var(--accent);
}

/* Desktop nav */
.nav {
  display: flex;
  gap: 2px;
  padding: 5px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  color: var(--accent-text);
  background: var(--accent-soft);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.menu-btn {
  display: none;
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  z-index: 999;
  background: var(--bg);
  overflow-y: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 40px;
  min-height: 100%;
}

.mobile-link {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  animation: slide-in 0.5s var(--ease-out) both;
  animation-delay: calc(var(--i) * 60ms);
}

.mobile-link.active {
  color: var(--accent-text);
}

.mobile-index {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-subtle);
}

.mobile-footer {
  margin-top: auto;
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.mobile-socials {
  display: flex;
  gap: 0.5rem;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease, transform 0.35s var(--ease-out);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@media (max-width: 959px) {
  .nav {
    display: none;
  }

  .menu-btn {
    display: inline-grid;
  }
}

@media (max-width: 420px) {
  .header-cv {
    display: none;
  }
}
</style>
