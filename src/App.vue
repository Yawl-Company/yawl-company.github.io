<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from './store/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import './assets/tailwind.css';

html {
  scroll-behavior: smooth;
}
</style>
