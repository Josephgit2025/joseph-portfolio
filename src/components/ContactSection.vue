<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-panel" v-reveal>
        <div class="contact-glow" aria-hidden="true" />

        <div class="contact-intro">
          <SectionHeading index="04" eyebrow="Contact" title="Let's work together." />

          <p class="contact-text">
            Have an opportunity, a question or a project in mind? My inbox is open.
          </p>

          <ul class="contact-list">
            <li>
              <span class="contact-icon"><v-icon :icon="mdiEmailOutline" size="20" /></span>
              <span class="contact-item">
                <small>Email</small>
                <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
              </span>
              <button
                type="button"
                class="icon-btn copy-btn"
                :aria-label="copied ? 'Email address copied' : 'Copy email address'"
                :title="copied ? 'Copied!' : 'Copy'"
                @click="copyEmail"
              >
                <v-icon :icon="copied ? mdiCheck : mdiContentCopy" size="18" />
              </button>
            </li>
            <li v-for="s in links" :key="s.name">
              <span class="contact-icon"><v-icon :icon="s.icon" size="20" /></span>
              <span class="contact-item">
                <small>{{ s.name }}</small>
                <a :href="s.href" target="_blank" rel="noopener">{{ s.label }}</a>
              </span>
            </li>
            <li>
              <span class="contact-icon"><v-icon :icon="mdiMapMarkerOutline" size="20" /></span>
              <span class="contact-item">
                <small>Location</small>
                <span>{{ profile.location }}</span>
              </span>
            </li>
          </ul>

          <a :href="profile.cv" :download="profile.cvFileName" class="btn btn-ghost">
            <v-icon :icon="mdiTrayArrowDown" size="18" />
            Download my CV
          </a>
        </div>

        <v-form ref="formRef" class="contact-form" validate-on="submit lazy" @submit.prevent="handleSubmit">
          <h3 class="form-title">Send me a message</h3>

          <v-text-field
            v-model="form.name"
            label="Your name"
            variant="outlined"
            color="primary"
            autocomplete="name"
            :rules="[required]"
          />
          <v-text-field
            v-model="form.email"
            label="Your email"
            type="email"
            variant="outlined"
            color="primary"
            autocomplete="email"
            :rules="[required, validEmail]"
          />
          <v-textarea
            v-model="form.message"
            label="Your message"
            variant="outlined"
            color="primary"
            rows="5"
            auto-grow
            :rules="[required]"
          />

          <button type="submit" class="btn btn-primary btn-block" :disabled="sending">
            <v-progress-circular v-if="sending" indeterminate size="18" width="2" />
            <v-icon v-else :icon="mdiSend" size="18" />
            {{ sending ? "Sending…" : "Send message" }}
          </button>

          <v-alert
            v-if="feedback"
            :type="feedback.type"
            variant="tonal"
            density="comfortable"
            rounded="lg"
            class="mt-4"
            role="status"
          >
            {{ feedback.text }}
          </v-alert>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  mdiCheck,
  mdiContentCopy,
  mdiEmailOutline,
  mdiMapMarkerOutline,
  mdiSend,
  mdiTrayArrowDown,
} from "@mdi/js";
import SectionHeading from "@/components/SectionHeading.vue";
import { profile, socials } from "@/data/portfolio";

const links = socials.filter((s) => s.name !== "Email");

// ---------------------------------------------------------------------------
// EmailJS configuration (https://dashboard.emailjs.com)
// Set these as GitHub repository variables (see README). As long as the
// template ID and public key are missing, the form falls back to opening the
// visitor's email app with the message pre-filled, so no message is lost.
// ---------------------------------------------------------------------------
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6no14mc",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const emailjsReady = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

const formRef = ref(null);
const form = ref({ name: "", email: "", message: "" });
const sending = ref(false);
const feedback = ref(null);

const required = (v) => Boolean(v && v.trim()) || "This field is required";
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email";

const openMailApp = () => {
  const { name, email, message } = form.value;
  const subject = encodeURIComponent(`Portfolio contact: ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
};

const handleSubmit = async () => {
  const { valid } = await formRef.value.validate();
  if (!valid) return;

  feedback.value = null;

  if (!emailjsReady) {
    openMailApp();
    feedback.value = {
      type: "info",
      text: "Your email app should open with your message ready to send. If it doesn't, write to me at " + profile.email,
    };
    return;
  }

  sending.value = true;
  try {
    const { default: emailjs } = await import("emailjs-com");
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      EMAILJS.publicKey
    );
    feedback.value = { type: "success", text: "Thanks! Your message has been sent. I'll get back to you soon." };
    formRef.value.reset();
  } catch {
    feedback.value = {
      type: "error",
      text: `Something went wrong. Please try again or email me directly at ${profile.email}.`,
    };
  } finally {
    sending.value = false;
  }
};

// Copy email to clipboard
const copied = ref(false);
let copiedTimer = null;
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
};
</script>

<style scoped>
.contact-panel {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(32px, 5vw, 72px);
  padding: clamp(1.6rem, 5vw, 4rem);
  border-radius: 32px;
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  isolation: isolate;
}

.contact-glow {
  position: absolute;
  z-index: -1;
  width: 620px;
  height: 620px;
  left: -220px;
  bottom: -320px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow), transparent 65%);
  opacity: 0.6;
  filter: blur(30px);
}

.contact-intro :deep(.section-heading) {
  margin-bottom: 1.4rem;
}

.contact-text {
  font-size: 1.075rem;
  line-height: 1.75;
  color: var(--text-muted);
  max-width: 30rem;
}

.contact-list {
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.contact-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  color: var(--accent-text);
}

.contact-item {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contact-item small {
  font-size: 0.75rem;
  color: var(--text-subtle);
}

.contact-item a,
.contact-item span {
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-item a:hover {
  color: var(--accent-text);
}

.copy-btn {
  width: 36px;
  height: 36px;
  margin-left: 0.2rem;
}

/* Form */
.contact-form {
  padding: clamp(1.4rem, 3vw, 2rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--bg-soft);
}

.form-title {
  font-family: var(--font-body);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
}

.contact-form :deep(.v-input) {
  margin-bottom: 0.4rem;
}

.contact-form .btn {
  margin-top: 0.4rem;
}

@media (max-width: 959px) {
  .contact-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-panel {
    border-radius: var(--radius-lg);
    padding: 1.4rem 1.1rem;
  }

  .contact-form {
    padding: 1.2rem 1rem;
  }
}
</style>
