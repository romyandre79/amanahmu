<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-900">
    <!-- Navbar -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-2">
            <!-- Logo Placeholder -->
            <div class="bg-primary-600 text-white p-2 rounded-lg font-bold text-xl">A</div>
            <span class="font-bold text-2xl text-primary-700">Amanahmu</span>
          </div>

          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink :to="localePath('/')" class="text-gray-600 hover:text-primary-600 font-medium"
              >{{ $t('nav.home') }}</NuxtLink
            >
            <NuxtLink :to="localePath('/services')" class="text-gray-600 hover:text-primary-600 font-medium"
              >{{ $t('nav.services') }}</NuxtLink
            >
            <NuxtLink :to="localePath('/about')" class="text-gray-600 hover:text-primary-600 font-medium"
              >{{ $t('nav.about') }}</NuxtLink
            >
          </nav>

          <div class="flex items-center space-x-4">
            <select v-model="$i18n.locale" class="border-none bg-transparent text-gray-600 font-medium focus:ring-0 cursor-pointer">
               <option value="en">🇺🇸 EN</option>
               <option value="id">🇮🇩 ID</option>
               <option value="zh">🇨🇳 ZH</option>
            </select>
            <NuxtLink :to="localePath('/login/customer')" class="text-gray-600 hover:text-primary-600 font-medium"
              >{{ $t('nav.login_customer') }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/login/partner')"
              class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium transition-colors"
            >
              {{ $t('nav.join_partner') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">Amanahmu</h3>
            <p class="text-gray-400">Trusted services for everyone.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><NuxtLink to="/about" class="hover:text-white">About Us</NuxtLink></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <!-- Add more footer columns as needed -->
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          &copy; {{ new Date().getFullYear() }} Amanahmu. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
