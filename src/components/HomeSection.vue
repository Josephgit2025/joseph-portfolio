<template>
  <section id="home" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid" />
      <div class="hero-glow glow-1" />
      <div class="hero-glow glow-2" />
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <a href="#contact" class="status-pill">
          <span class="status-dot" aria-hidden="true" />
          {{ profile.availability }}
          <v-icon :icon="mdiArrowRight" size="16" class="status-arrow" />
        </a>

        <p class="hero-hello">Hello, I'm</p>
        <h1 class="hero-title">
          <span class="hero-firstname">{{ profile.firstName }}</span>
          <span class="hero-lastname">{{ profile.lastName }}</span>
        </h1>

        <p class="hero-role">
          <span class="sr-only">I build {{ profile.roles.join(", ") }}.</span>
          <span aria-hidden="true">
            <span class="role-prefix">I build</span>
            <span class="role-typed">{{ typed }}</span><span class="caret" />
          </span>
        </p>

        <p class="hero-lead">{{ profile.tagline }}</p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">
            See my projects
            <v-icon :icon="mdiArrowRight" size="18" class="icon-nudge" />
          </a>
          <a :href="profile.cv" :download="profile.cvFileName" class="btn btn-ghost">
            <v-icon :icon="mdiTrayArrowDown" size="18" />
            Download CV
          </a>
        </div>

        <div class="hero-socials">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            class="icon-btn"
            :aria-label="s.name"
            :title="s.name"
            :target="s.href.startsWith('http') ? '_blank' : undefined"
            rel="noopener"
          >
            <v-icon :icon="s.icon" size="20" />
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="portrait">
          <div class="portrait-frame">
            <img
              :src="profile.photo"
              :alt="`Portrait of ${profile.fullName}`"
              width="760"
              height="1013"
              fetchpriority="high"
            />
          </div>

          <div class="float-card float-terminal" aria-hidden="true">
            <div class="term-bar"><i /><i /><i /><span>~/portfolio</span></div>
            <code><span class="term-prompt">$</span> kubectl get pods</code>
            <code class="term-out">portfolio-web <span class="term-ok">● Running</span></code>
          </div>

          <div class="float-card float-school">
            <v-icon :icon="mdiSchoolOutline" size="18" />
            <span>
              <strong>{{ profile.school }}</strong>
              <small>MSc · Systems Architecture</small>
            </span>
          </div>
        </div>
      </div>
    </div>

    <a href="#about" class="scroll-cue" aria-label="Scroll to the About section">
      <span class="mouse"><span class="wheel" /></span>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { mdiArrowRight, mdiSchoolOutline, mdiTrayArrowDown } from "@mdi/js";
import { profile, socials } from "@/data/portfolio";

// Typewriter effect on the "I build …" line
const roles = profile.roles;
const typed = ref(roles[0]);
let timer = null;
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;

const tick = () => {
  const word = roles[roleIndex];
  if (deleting) {
    charIndex -= 1;
    typed.value = word.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timer = setTimeout(tick, 280);
      return;
    }
    timer = setTimeout(tick, 28);
  } else {
    const next = roles[roleIndex];
    charIndex += 1;
    typed.value = next.slice(0, charIndex);
    if (charIndex === next.length) {
      deleting = true;
      timer = setTimeout(tick, 2200);
      return;
    }
    timer = setTimeout(tick, 55);
  }
};

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  timer = setTimeout(tick, 2600);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(var(--header-h) + 48px) 0 96px;
  overflow: hidden;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 60% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 60% 40%, #000 30%, transparent 75%);
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
}

.glow-1 {
  width: 520px;
  height: 520px;
  right: 6%;
  top: 12%;
  background: radial-gradient(circle, var(--accent-glow), transparent 70%);
  animation: drift 14s ease-in-out infinite alternate;
}

.glow-2 {
  width: 420px;
  height: 420px;
  left: -8%;
  bottom: -10%;
  background: radial-gradient(circle, rgba(64, 140, 255, 0.1), transparent 70%);
  animation: drift 18s ease-in-out infinite alternate-reverse;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(40px, 6vw, 88px);
}

/* Copy */
.hero-copy > * {
  animation: rise 0.9s var(--ease-out) both;
}

.hero-copy > :nth-child(2) { animation-delay: 0.08s; }
.hero-copy > :nth-child(3) { animation-delay: 0.14s; }
.hero-copy > :nth-child(4) { animation-delay: 0.22s; }
.hero-copy > :nth-child(5) { animation-delay: 0.3s; }
.hero-copy > :nth-child(6) { animation-delay: 0.38s; }
.hero-copy > :nth-child(7) { animation-delay: 0.46s; }

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.9rem 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--accent-border);
  background: var(--accent-soft);
  color: var(--text);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.25s var(--ease-out);
}

.status-pill:hover {
  transform: translateY(-1px);
  background: color-mix(in srgb, var(--accent) 18%, transparent);
}

.status-dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.status-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent);
  animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.status-arrow {
  color: var(--accent-text);
  transition: transform 0.25s var(--ease-out);
}

.status-pill:hover .status-arrow {
  transform: translateX(3px);
}

.hero-hello {
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--text-subtle);
}

.hero-title {
  margin-top: 0.6rem;
  /* "Joseph-Marie" is ~7.3em wide in Syne 700: keep it on one line */
  font-size: clamp(2.4rem, 5.4vw, 4.8rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.hero-firstname {
  display: block;
  white-space: nowrap;
}

.hero-lastname {
  display: inline-block;
  background: linear-gradient(100deg, var(--accent) 10%, var(--accent-strong) 50%, #5cc8ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--accent);
  padding-bottom: 0.08em;
}

.hero-role {
  margin-top: 1.5rem;
  min-height: 1.6em;
  font-family: var(--font-mono);
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  line-height: 1.6;
  color: var(--text-muted);
}

.role-prefix {
  color: var(--text-subtle);
  margin-right: 0.5ch;
}

.role-typed {
  color: var(--text);
}

.caret {
  display: inline-block;
  width: 0.55ch;
  height: 1.15em;
  margin-left: 2px;
  vertical-align: -0.2em;
  background: var(--accent);
  animation: blink 1s steps(1) infinite;
}

.hero-lead {
  margin-top: 1.1rem;
  max-width: 34rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2.2rem;
}

.hero-socials {
  display: flex;
  gap: 0.6rem;
  margin-top: 2rem;
}

/* Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  animation: rise 1s var(--ease-out) 0.2s both;
}

.portrait {
  position: relative;
  width: min(100%, 380px);
}

.portrait::before {
  content: "";
  position: absolute;
  inset: 8% -6% -6% 8%;
  border-radius: 36px;
  background: radial-gradient(circle at 30% 30%, var(--accent-glow), transparent 70%);
  filter: blur(40px);
  z-index: -1;
}

.portrait-frame {
  position: relative;
  padding: 2px;
  border-radius: 32px;
  overflow: hidden;
  background: var(--border-strong);
  box-shadow: var(--shadow-lg);
  isolation: isolate;
}

.portrait-frame::before {
  content: "";
  position: absolute;
  inset: -50%;
  z-index: -1;
  background: conic-gradient(from 0deg, transparent 0 62%, var(--accent) 80%, #5cc8ff 88%, transparent 100%);
  animation: spin 7s linear infinite;
}

.portrait-frame img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 50% 30%;
  border-radius: 30px;
  background: var(--surface);
}

.float-card {
  position: absolute;
  border: 1px solid var(--border-strong);
  background: var(--surface-glass);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  animation: float 6s ease-in-out infinite;
}

.float-terminal {
  left: -14%;
  bottom: 12%;
  padding: 0.75rem 0.95rem 0.85rem;
  min-width: 220px;
  font-size: 0.78rem;
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 0.6rem;
}

.term-bar i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff5f57;
}

.term-bar i:nth-child(2) { background: #febc2e; }
.term-bar i:nth-child(3) { background: #28c840; }

.term-bar span {
  margin-left: 6px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-subtle);
}

.float-terminal code {
  display: block;
  font-family: var(--font-mono);
  line-height: 1.7;
  color: var(--text);
  white-space: nowrap;
}

.term-prompt {
  color: var(--accent-text);
}

.term-out {
  color: var(--text-muted) !important;
}

.term-ok {
  margin-left: 0.6rem;
  color: var(--accent-text);
}

.float-school {
  right: -10%;
  top: 9%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.9rem;
  color: var(--accent-text);
  animation-delay: -3s;
}

.float-school span {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.float-school strong {
  font-size: 0.85rem;
  color: var(--text);
}

.float-school small {
  font-size: 0.72rem;
  color: var(--text-subtle);
}

/* Scroll cue */
.scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  padding: 8px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.scroll-cue:hover {
  opacity: 1;
}

.mouse {
  display: block;
  width: 24px;
  height: 38px;
  border: 2px solid var(--text-subtle);
  border-radius: 14px;
  position: relative;
}

.wheel {
  position: absolute;
  left: 50%;
  top: 7px;
  width: 3px;
  height: 7px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: var(--accent);
  animation: wheel 1.8s ease-in-out infinite;
}

/* Animations */
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  50% {
    transform: translateY(-10px);
  }
}

@keyframes drift {
  to {
    transform: translate(-40px, 30px) scale(1.08);
  }
}

@keyframes wheel {
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}

/* Responsive */
@media (max-width: 959px) {
  .hero {
    min-height: auto;
    padding-top: calc(var(--header-h) + 40px);
  }

  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
  }

  .portrait {
    width: min(78%, 320px);
  }

  .float-terminal {
    left: -18%;
  }

  .float-school {
    right: -16%;
  }

  .scroll-cue {
    display: none;
  }

  .hero-title {
    font-size: min(4.6rem, calc((100vw - 2 * clamp(16px, 4vw, 32px)) / 7.8));
  }
}

@media (max-width: 400px) {
  .hero-role {
    min-height: 3.2em;
  }
}

@media (max-width: 600px) {
  .hero {
    padding-bottom: 64px;
  }

  .portrait {
    width: 62%;
  }

  .float-terminal {
    left: -24%;
    bottom: 6%;
    min-width: 0;
    font-size: 0.68rem;
    padding: 0.55rem 0.7rem 0.65rem;
  }

  .float-school {
    right: -26%;
    top: 6%;
    padding: 0.5rem 0.7rem;
  }

  .float-school small {
    display: none;
  }

  .hero-hello {
    margin-top: 1.6rem;
  }

  .hero-actions .btn {
    flex: 1 1 auto;
  }
}
</style>
