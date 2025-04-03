<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div>
    <TheNavbar />
    
    <!-- Hero Section -->
    <section class="relative bg-white dark:bg-secondary overflow-hidden transition-colors duration-300">
      <div class="container-custom py-20 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
              Modern Software Development from Boston
            </h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We specialize in open source and custom development for Android, iOS, and multiplatform solutions.
            </p>
          </div>
          <div class="relative">
            <img src="/favicon.svg" alt="Yawl Logo" class="relative z-10 w-full max-w-lg mx-auto" />
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="fill-gray-100 dark:fill-secondary/80 transition-colors duration-300">
          <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
    
    <!-- DevSecOps Section -->
    <section class="py-20 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1 animate-slide-in">
            <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="DevSecOps" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div class="order-1 lg:order-2 animate-slide-up">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
              DevSecOps Methodology
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              At Yawl, we integrate security into every stage of the development process. Our DevSecOps approach ensures that your software is not only functional but secure from the start.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Continuous security testing throughout the development lifecycle</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Early identification and remediation of vulnerabilities</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Automated security controls and compliance checks</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Comprehensive risk assessment and management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Automation Section -->
    <section class="py-20 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">Full Automation</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We believe in automating everything possible to increase efficiency and reduce human error.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          <!-- CI/CD -->
          <div class="bg-white dark:bg-secondary p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-secondary dark:text-white mb-2">CI/CD Pipeline</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Automated building, testing, and deployment for faster and more reliable releases.
            </p>
          </div>
          
          <!-- Testing -->
          <div class="bg-white dark:bg-secondary p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="animation-delay: 100ms;">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-secondary dark:text-white mb-2">Automated Testing</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Comprehensive testing suite for unit, integration, and UI testing.
            </p>
          </div>
          
          <!-- Security -->
          <div class="bg-white dark:bg-secondary p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="animation-delay: 200ms;">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-secondary dark:text-white mb-2">Security Scanning</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Automated vulnerability scanning and dependency checks.
            </p>
          </div>
          
          <!-- Monitoring -->
          <div class="bg-white dark:bg-secondary p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="animation-delay: 300ms;">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-secondary dark:text-white mb-2">Monitoring & Alerts</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Real-time monitoring and alerting systems for proactive issue resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Boston Section -->
    <section class="py-20 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <h2 class="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
              Based in Boston
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              Located in the heart of Boston's thriving tech ecosystem, we combine innovation with New England's rich tradition of excellence and attention to detail.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              Our Boston location allows us to collaborate closely with some of the world's leading technology companies and educational institutions, giving us access to cutting-edge research and talent.
            </p>
            <router-link to="/contact" class="btn-primary">
              Visit Our Office
            </router-link>
          </div>
          <div class="animate-slide-in">
            <img src="/images/office.jpg" 
                alt="Boston Office" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to Start Your Project?
        </h2>
        <p class="text-lg text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
          Contact us today to discuss how we can help you achieve your software development goals.
        </p>
        <div class="animate-slide-up">
          <router-link to="/contact" class="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-colors duration-300">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template> 