<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-white dark:bg-secondary shadow-md sticky top-0 z-50 transition-colors duration-300">
    <div class="container-custom py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <img src="/favicon.svg" alt="Yawl Logo" class="h-10 w-10" />
          <span class="font-bold text-2xl text-secondary dark:text-primary">Yawl</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in [
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ]" 
            :key="item.name" 
            :to="item.path" 
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-medium transition-colors duration-300"
            active-class="text-primary dark:text-primary-light font-semibold"
          >
            {{ item.name }}
          </router-link>
          <ThemeToggle />
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <ThemeToggle />
          <button 
            @click="toggleMenu" 
            class="p-2 ml-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <svg 
              v-if="!isMenuOpen" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden mt-4 py-4 space-y-4 animate-fade-in"
      >
        <router-link 
          v-for="item in [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ]" 
          :key="item.name" 
          :to="item.path" 
          class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
          active-class="bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-light"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template> 