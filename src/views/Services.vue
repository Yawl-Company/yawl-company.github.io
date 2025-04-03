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
            Our Services
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive software development solutions for modern businesses.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Mobile Development Section -->
    <section class="py-16 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <span class="text-sm text-primary dark:text-primary-light font-semibold uppercase tracking-wider">Mobile Development</span>
            <h2 class="text-3xl font-bold text-secondary dark:text-white mt-2 mb-6">
              Android Development
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We create high-performance, secure, and user-friendly Android applications that deliver exceptional experiences on every device.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Modern app architecture using Kotlin and Jetpack Compose</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Performance optimization for smooth user experiences</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Thorough testing and quality assurance</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">App security and compliance with best practices</span>
              </li>
            </ul>
          </div>
          <div class="animate-slide-in order-first lg:order-last">
            <img src="https://images.unsplash.com/photo-1601784551893-1d9636bbc1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Android Development" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- iOS Development Section -->
    <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-in">
            <img src="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="iOS Development" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div class="animate-slide-up">
            <span class="text-sm text-primary dark:text-primary-light font-semibold uppercase tracking-wider">Mobile Development</span>
            <h2 class="text-3xl font-bold text-secondary dark:text-white mt-2 mb-6">
              iOS Development
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We build elegant, high-quality iOS applications that deliver exceptional user experiences across the Apple ecosystem.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Swift and SwiftUI for modern iOS development</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Beautiful, responsive UI following Apple design guidelines</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Integration with Apple's latest frameworks and services</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Comprehensive testing across multiple devices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Multiplatform Development -->
    <section class="py-16 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <span class="text-sm text-primary dark:text-primary-light font-semibold uppercase tracking-wider">Cross-Platform</span>
            <h2 class="text-3xl font-bold text-secondary dark:text-white mt-2 mb-6">
              Multiplatform Development
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We leverage modern frameworks to build applications that work seamlessly across multiple platforms, reducing development time and costs.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Kotlin Multiplatform Mobile (KMM) for shared logic</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Flutter for consistent UI across platforms</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">React Native for web-to-mobile applications</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Platform-specific optimizations and native integrations</span>
              </li>
            </ul>
          </div>
          <div class="animate-slide-in order-first lg:order-last">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Multiplatform Development" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Open Source Section -->
    <section class="py-16 bg-white dark:bg-secondary transition-colors duration-300">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-in">
            <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Open Source" 
                class="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div class="animate-slide-up">
            <span class="text-sm text-primary dark:text-primary-light font-semibold uppercase tracking-wider">Community</span>
            <h2 class="text-3xl font-bold text-secondary dark:text-white mt-2 mb-6">
              Open Source Projects
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              We actively contribute to and maintain open source projects that solve real-world problems and advance the software development community.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Development of libraries, tools, and frameworks</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Contributions to existing open source projects</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Community engagement and knowledge sharing</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary dark:text-primary-light mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-300">Sponsoring open source initiatives and events</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- DevSecOps Offerings -->
    <section class="py-16 bg-gray-100 dark:bg-secondary/80 transition-colors duration-300">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span class="text-sm text-primary dark:text-primary-light font-semibold uppercase tracking-wider">Security</span>
          <h2 class="text-3xl font-bold text-secondary dark:text-white mt-2 mb-4">
            DevSecOps Services
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            We help you integrate security throughout your development pipeline, ensuring your applications are secure by design.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <!-- Security Assessment -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Security Assessment</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Comprehensive security audits to identify vulnerabilities and recommend mitigations.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Code review for security vulnerabilities</li>
              <li>• Dependency scanning and analysis</li>
              <li>• Architecture and design review</li>
              <li>• Compliance assessment</li>
            </ul>
          </div>
          
          <!-- Pipeline Integration -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Pipeline Integration</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Integrate security testing and validation directly into your CI/CD pipelines.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Automated security scanning</li>
              <li>• Compliance validation</li>
              <li>• Infrastructure as code security checks</li>
              <li>• Artifact signing and verification</li>
            </ul>
          </div>
          
          <!-- Training -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Security Training</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Educate your team on security best practices and secure coding techniques.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Secure coding workshops</li>
              <li>• Threat modeling exercises</li>
              <li>• Security awareness training</li>
              <li>• Hands-on penetration testing training</li>
            </ul>
          </div>
          
          <!-- Monitoring -->
          <div class="bg-white dark:bg-secondary rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-secondary dark:text-white mb-3">Security Monitoring</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Continuous monitoring of your applications and infrastructure for security issues.
            </p>
            <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Real-time threat detection</li>
              <li>• Vulnerability scanning</li>
              <li>• Dependency monitoring</li>
              <li>• Incident response planning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <div class="container-custom text-center">
        <div class="max-w-3xl mx-auto animate-fade-in">
          <h2 class="text-3xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p class="text-lg mb-8">
            Contact us today to discuss how our services can help you achieve your software development goals.
          </p>
          <router-link to="/contact" class="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-colors duration-300">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template> 