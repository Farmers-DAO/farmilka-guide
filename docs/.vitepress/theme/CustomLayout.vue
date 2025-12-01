<template>
  <Layout>
    <template #home-hero-info>
      <div class="VPHero">
        <h1 class="name">
          <span class="clip">Гайд по Фармилке</span>
        </h1>
        <div class="custom-hero-text">
          <TypingText :words="['Build', 'Farm', 'Work']" rest-text=" Together!" />
        </div>
        <p class="tagline">Тут ты найдёшь все актуальные инструменты Фармилки, их полное описание и подробную инструкцию!</p>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TypingText from './components/TypingText.vue'

const { Layout } = DefaultTheme
</script>

<style scoped>
.VPHero {
  text-align: left;
}

.VPHero .name {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--vp-c-text-1);
}

.VPHero .name .clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.custom-hero-text {
  margin-top: 16px;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.VPHero .tagline {
  margin-top: 12px;
  padding-top: 8px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  white-space: pre-wrap;
  max-width: 392px;
  text-align: left;
}

@media (min-width: 640px) {
  .VPHero .name {
    font-size: 56px;
  }
  
  .custom-hero-text {
    font-size: 40px;
  }
  
  .VPHero .tagline {
    padding-top: 12px;
    max-width: 576px;
    font-size: 22px;
    line-height: 32px;
  }
}

@media (min-width: 960px) {
  .VPHero .name {
    font-size: 64px;
  }
  
  .custom-hero-text {
    font-size: 48px;
  }
  
  .VPHero .tagline {
    line-height: 36px;
    font-size: 24px;
  }
}
</style>

