<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="text-center max-w-lg">
        <div class="mb-6 flex justify-center">
             <div class="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                <svg v-if="error?.statusCode === 404" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
             </div>
        </div>
      <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ error?.statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</p>
      
      <p class="text-gray-500 mb-8" v-if="error?.statusCode === 404">
        Sorry, we identify the page you are looking for. It might have been removed, had its name changed, or is temporarily unavailable.
      </p>

       <button @click="handleError" class="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Go Back Home
      </button>
    </div>
  </div>
</template>
