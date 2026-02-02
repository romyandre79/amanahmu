<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const { user } = useAuth()

const formData = ref({
  name: user.value?.name || 'Agus Santoso',
  email: user.value?.email || 'agus@example.com',
  phone: '081234567890',
  bio: 'Experienced AC technician with 5 years of experience.',
})

const activeTab = ref('settings')

const portfolioItems = [
  {
    id: 1,
    title: 'Office AC Installation',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    date: 'Oct 2025',
  },
  {
    id: 2,
    title: 'Home Deep Cleaning',
    image:
      'https://images.unsplash.com/photo-1581578731117-10452a792edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    date: 'Sep 2025',
  },
  {
    id: 3,
    title: 'Bathroom Plumbing Fix',
    image:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    date: 'Aug 2025',
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Profile Settings</h1>
      <p class="text-gray-500">Manage your account information and preferences.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Profile Card -->
      <div class="md:col-span-1">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div class="relative inline-block mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Agus+S&background=0284c7&color=fff"
              class="w-32 h-32 rounded-full border-4 border-white shadow-md mx-auto"
            />
            <button
              class="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow border border-gray-200 hover:bg-gray-50 text-gray-600"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <h2 class="font-bold text-lg text-gray-900">{{ formData.name }}</h2>
          <p class="text-gray-500 text-sm">Professional Partner</p>

          <div class="mt-6 space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Rating</span>
              <span class="font-bold text-gray-900 flex items-center gap-1"
                >4.9
                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  /></svg
              ></span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Jobs Done</span>
              <span class="font-bold text-gray-900">124</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-500">Joined</span>
              <span class="font-bold text-gray-900">Jan 2025</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="md:col-span-2 space-y-6">
        <!-- Tabs -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-1 mb-6 flex">
          <button
            :class="
              activeTab === 'settings'
                ? 'bg-primary-100 text-primary-700 font-bold shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            "
            class="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
            @click="activeTab = 'settings'"
          >
            Settings
          </button>
          <button
            :class="
              activeTab === 'portfolio'
                ? 'bg-primary-100 text-primary-700 font-bold shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            "
            class="flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-200"
            @click="activeTab = 'portfolio'"
          >
            Portfolio
          </button>
        </div>

        <!-- Portfolio Content -->
        <div v-if="activeTab === 'portfolio'" class="space-y-6 animate-fade-in">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg text-gray-900">My Portfolio</h3>
            <button
              class="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-700 flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Project
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="item in portfolioItems"
              :key="item.id"
              class="group relative rounded-xl overflow-hidden aspect-video border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
            >
              <img
                :src="item.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4"
              >
                <h4 class="text-white font-bold text-lg">{{ item.title }}</h4>
                <p class="text-gray-300 text-sm">{{ item.date }}</p>
              </div>
            </div>
            <!-- Placeholder for empty state if needed -->
          </div>
        </div>

        <!-- Settings (Existing Forms) -->
        <div v-if="activeTab === 'settings'" class="space-y-6 animate-fade-in">
          <!-- Basic Info -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Basic Information</h3>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                  v-model="formData.bio"
                  rows="3"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div class="mt-6 text-right">
              <button
                class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium text-sm"
              >
                Save Changes
              </button>
            </div>
          </div>

          <!-- Password -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 class="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Security</h3>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="mt-6 text-right">
              <button
                class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium text-sm"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
