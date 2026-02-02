<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const activeTab = ref('active')
</script>

<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">My Jobs</h1>
      <p class="text-gray-500">Manage your active and past service requests.</p>
    </div>

    <!-- Tabs -->
    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-8">
        <button
          :class="
            activeTab === 'active'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          "
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          @click="activeTab = 'active'"
        >
          Active Jobs
          <span class="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">2</span>
        </button>
        <button
          :class="
            activeTab === 'completed'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          "
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          @click="activeTab = 'completed'"
        >
          Completed
        </button>
        <button
          :class="
            activeTab === 'cancelled'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          "
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
          @click="activeTab = 'cancelled'"
        >
          Cancelled
        </button>
      </nav>
    </div>

    <!-- Active Jobs Content -->
    <div v-if="activeTab === 'active'" class="space-y-4">
      <!-- Job Card -->
      <div
        v-for="i in 2"
        :key="i"
        class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
      >
        <div class="flex flex-col md:flex-row justify-between md:items-start gap-4">
          <div class="flex gap-4">
            <div
              class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl"
            >
              ❄️
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <h3 class="text-lg font-bold text-gray-900">AC Cleaning - Split Wall</h3>
                <span class="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs font-bold rounded"
                  >IN PROGRESS</span
                >
              </div>
              <p class="text-gray-500 text-sm mb-2">Order #JOB-2026-{{ 849 + i }} • Oct 24, 2026</p>
              <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                <span class="flex items-center gap-1">📍 Jl. Kaliurang km 5</span>
                <span class="flex items-center gap-1">👤 Budi Santoso</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <p class="text-xl font-bold text-primary-600">Rp 75.000</p>
            <p class="text-xs text-gray-500">Fixed Price</p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-100 flex justify-end gap-3">
          <button
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View Details
          </button>
          <button
            class="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
          >
            Mark Complete
          </button>
        </div>
      </div>
    </div>

    <!-- Completed Jobs Content (Mock) -->
    <div v-if="activeTab === 'completed'" class="space-y-4">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-75">
        <div class="flex gap-4">
          <div
            class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-2xl"
          >
            ✓
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900">Plumbing Repair</h3>
            <p class="text-gray-500 text-sm">Order #JOB-2026-800 • Oct 20, 2026</p>
            <p class="text-green-600 font-medium text-sm mt-1">Completed successfully</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
