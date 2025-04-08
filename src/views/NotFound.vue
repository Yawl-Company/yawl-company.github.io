<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div>
    <TheNavbar />
    
    <main class="min-h-[60vh] flex items-center justify-center bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto animate-fade-in">
          <h1 class="text-6xl md:text-8xl font-bold text-primary dark:text-primary-light mb-4">
            404
          </h1>
          <h2 class="text-2xl md:text-3xl font-semibold text-secondary dark:text-white mb-6">
            Page Not Found
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <router-link 
            to="/" 
            class="inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-md font-bold transition-colors duration-300"
          >
            Return Home
          </router-link>
        </div>
      </div>
    </main>
    
    <TheFooter />
  </div>
</template> 