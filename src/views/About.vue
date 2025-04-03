<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div>
    <TheNavbar />
    
    <!-- Hero Section -->
    <section class="bg-white dark:bg-secondary py-20 transition-colors duration-300">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 class="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
            About Yawl
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            A software development company focused on quality, security, and innovation.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Company Overview -->
    <section class="py-16 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <h2 class="text-3xl font-bold text-secondary dark:text-white mb-6">
              Our Story
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Founded in Boston, Yawl has grown from a small team of passionate developers into a leading software development company specializing in mobile and multiplatform solutions.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We believe that great software is built on a foundation of solid engineering principles, attention to detail, and a deep understanding of user needs.
            </p>
            <p class="text-gray-600 dark:text-gray-300">
              Today, we continue to push the boundaries of what's possible in software development, always with a focus on creating secure, reliable, and user-friendly applications.
            </p>
          </div>
          <div class="animate-slide-in">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Yawl Team" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Our Approach -->
    <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-secondary dark:text-white mb-4">
            Our Approach
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            We combine technical excellence with a human-centered approach to create software that makes a difference.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Open Source -->
          <div class="bg-gray-100 dark:bg-secondary/80 rounded-xl p-8 shadow-lg animate-slide-up transition-all duration-300 hover:shadow-xl">
            <div class="text-primary dark:text-primary-light mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Open Source</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We believe in the power of open source to drive innovation and create better software. That's why we actively contribute to and maintain several open source projects.
            </p>
          </div>
          
          <!-- DevSecOps -->
          <div class="bg-gray-100 dark:bg-secondary/80 rounded-xl p-8 shadow-lg animate-slide-up transition-all duration-300 hover:shadow-xl" style="animation-delay: 100ms;">
            <div class="text-primary dark:text-primary-light mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">DevSecOps</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Security is built into every stage of our development process, not added as an afterthought. Our DevSecOps methodology ensures that your software is secure from day one.
            </p>
          </div>
          
          <!-- Automation -->
          <div class="bg-gray-100 dark:bg-secondary/80 rounded-xl p-8 shadow-lg animate-slide-up transition-all duration-300 hover:shadow-xl" style="animation-delay: 200ms;">
            <div class="text-primary dark:text-primary-light mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Automation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We automate everything possible to increase efficiency, maintain consistent quality, and allow our team to focus on solving complex problems instead of repetitive tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="py-16 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-secondary dark:text-white mb-4">
            Our Team
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Meet the talented individuals who make Yawl a leader in software development.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden animate-slide-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Team Member" 
                class="w-full h-64 object-cover object-center" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-secondary dark:text-white">Alex Johnson</h3>
              <p class="text-primary dark:text-primary-light mb-2">CEO & Co-Founder</p>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                20+ years of experience in software development and team leadership.
              </p>
            </div>
          </div>
          
          <!-- Team Member 2 -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden animate-slide-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style="animation-delay: 100ms;">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Team Member" 
                class="w-full h-64 object-cover object-center" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-secondary dark:text-white">Sarah Chen</h3>
              <p class="text-primary dark:text-primary-light mb-2">CTO & Co-Founder</p>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Expert in mobile development with a focus on security and performance.
              </p>
            </div>
          </div>
          
          <!-- Team Member 3 -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden animate-slide-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style="animation-delay: 200ms;">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Team Member" 
                class="w-full h-64 object-cover object-center" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-secondary dark:text-white">Michael Rodriguez</h3>
              <p class="text-primary dark:text-primary-light mb-2">Lead Android Developer</p>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Passionate about creating intuitive and responsive Android applications.
              </p>
            </div>
          </div>
          
          <!-- Team Member 4 -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg overflow-hidden animate-slide-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style="animation-delay: 300ms;">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Team Member" 
                class="w-full h-64 object-cover object-center" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-secondary dark:text-white">Emily Kim</h3>
              <p class="text-primary dark:text-primary-light mb-2">Lead iOS Developer</p>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Specializes in creating beautiful and performant iOS applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-secondary dark:text-white mb-4">
            Our Values
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            The principles that guide everything we do at Yawl.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Value 1 -->
          <div class="flex space-x-4 animate-slide-in">
            <div class="flex-shrink-0">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-secondary dark:text-white mb-2">Security First</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We believe that security should be integrated into every aspect of the development process, not added as an afterthought.
              </p>
            </div>
          </div>
          
          <!-- Value 2 -->
          <div class="flex space-x-4 animate-slide-in" style="animation-delay: 100ms;">
            <div class="flex-shrink-0">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-secondary dark:text-white mb-2">Innovation</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We constantly explore new technologies and approaches to solve complex problems and create better user experiences.
              </p>
            </div>
          </div>
          
          <!-- Value 3 -->
          <div class="flex space-x-4 animate-slide-in" style="animation-delay: 200ms;">
            <div class="flex-shrink-0">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-secondary dark:text-white mb-2">Collaboration</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We work closely with our clients and the broader developer community to create solutions that truly meet user needs.
              </p>
            </div>
          </div>
          
          <!-- Value 4 -->
          <div class="flex space-x-4 animate-slide-in" style="animation-delay: 300ms;">
            <div class="flex-shrink-0">
              <div class="bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-secondary dark:text-white mb-2">Quality</h3>
              <p class="text-gray-600 dark:text-gray-300">
                We are committed to excellence in everything we do, from code quality to user experience to customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <div class="container-custom text-center">
        <div class="max-w-3xl mx-auto animate-fade-in">
          <h2 class="text-3xl font-bold mb-6">
            Join Our Team
          </h2>
          <p class="text-lg mb-8">
            We're always looking for talented individuals who share our passion for creating exceptional software.
          </p>
          <a href="#" class="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-colors duration-300">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template> 