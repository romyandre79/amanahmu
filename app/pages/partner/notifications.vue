<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const notifications = [
  {
    id: 1,
    type: 'job',
    title: 'New Job Available',
    message: 'AC Service required in Kemang area.',
    time: '10 mins ago',
    read: false,
  },
  {
    id: 2,
    type: 'finance',
    title: 'Payment Received',
    message: 'You received Rp 150.000 from Customer Budi.',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'system',
    title: 'Account Verified',
    message: 'Your professional documents have been approved.',
    time: '1 day ago',
    read: true,
  },
  {
    id: 4,
    type: 'promo',
    title: 'Weekend Boost',
    message: 'Get 2x visibility this weekend!',
    time: '2 days ago',
    read: true,
  },
  {
    id: 5,
    type: 'job',
    title: 'Job Cancelled',
    message: 'Customer canceled job #JOB-123.',
    time: '3 days ago',
    read: true,
  },
]
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Notifications</h1>
        <p class="text-gray-500">Stay updated with your latest activities.</p>
      </div>
      <button class="text-primary-600 text-sm font-medium hover:text-primary-700 hover:underline">
        Mark all as read
      </button>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div
        v-for="notif in notifications"
        :key="notif.id"
        class="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors flex gap-4"
        :class="{ 'bg-blue-50/40': !notif.read }"
      >
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          :class="{
            'bg-blue-100 text-blue-600': notif.type === 'job',
            'bg-green-100 text-green-600': notif.type === 'finance',
            'bg-gray-100 text-gray-600': notif.type === 'system',
            'bg-purple-100 text-purple-600': notif.type === 'promo',
          }"
        >
          <span v-if="notif.type === 'job'">💼</span>
          <span v-else-if="notif.type === 'finance'">💰</span>
          <span v-else-if="notif.type === 'system'">⚙️</span>
          <span v-else>🎉</span>
        </div>
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-gray-900" :class="{ 'text-primary-800': !notif.read }">
              {{ notif.title }}
            </h3>
            <span class="text-xs text-gray-500 whitespace-nowrap ml-2">{{ notif.time }}</span>
          </div>
          <p class="text-sm text-gray-600 mt-1">{{ notif.message }}</p>
        </div>
        <div v-if="!notif.read" class="self-center">
          <span class="block w-2 h-2 bg-primary-600 rounded-full"></span>
        </div>
      </div>
    </div>
  </div>
</template>
