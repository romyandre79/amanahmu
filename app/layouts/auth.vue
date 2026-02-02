<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- Logo -->
      <NuxtLink to="/" class="flex justify-center items-center gap-2 mb-6">
        <div class="bg-primary-600 text-white p-2 rounded-lg font-bold text-xl">A</div>
        <span class="font-bold text-2xl text-primary-700">Amanahmu</span>
      </NuxtLink>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
        <slot />
      </div>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          <NuxtLink to="/" class="font-medium text-primary-600 hover:text-primary-500">
            &larr; Back to Home
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
