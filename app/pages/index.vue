<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {{ $t('hero.title1') }} <br />
          <span class="text-primary-600">{{ $t('hero.title2') }}</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Search Bar Mockup -->
        <div
          class="max-w-3xl mx-auto bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center"
        >
          <input
            type="text"
            :placeholder="$t('hero.search_placeholder')"
            class="flex-1 px-6 py-4 rounded-full focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            class="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-colors"
          >
            {{ $t('hero.search_button') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900">Popular Services</h2>
          <p class="text-gray-600 mt-4">Explore our most requested service categories</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="i in 8"
            :key="i"
            class="group bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer hover:bg-primary-50 border border-transparent hover:border-primary-100"
          >
            <div
              class="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm group-hover:bg-white text-primary-500 group-hover:text-primary-600"
            >
              <!-- Icon Mockup -->
              <div class="w-8 h-8 bg-current rounded-md opacity-20"></div>
            </div>
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-700">
              Service Category {{ i }}
            </h3>
            <p class="text-sm text-gray-500 mt-1">120+ Professionals</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Prop / Why Choose Us -->
    <section class="py-20 bg-primary-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div class="text-4xl mb-4">🛡️</div>
            <h3 class="text-xl font-bold mb-2">Verified Partners</h3>
            <p class="text-primary-200">Every professional is vetted for quality and safety.</p>
          </div>
          <div>
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-bold mb-2">Transparent Pricing</h3>
            <p class="text-primary-200">Get quotes upfront without hidden fees.</p>
          </div>
          <div>
            <div class="text-4xl mb-4">⭐</div>
            <h3 class="text-xl font-bold mb-2">High Quality</h3>
            <p class="text-primary-200">Rated by customers like you.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
