<script setup lang="ts">
// State for dropdowns
const showNotifications = ref(false)
const showProfileMenu = ref(false)

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  showProfileMenu.value = false
}

const toggleProfile = () => {
  showProfileMenu.value = !showProfileMenu.value
  showNotifications.value = false
}

const closeDropdowns = () => {
  showNotifications.value = false
  showProfileMenu.value = false
}

const { logout, user, userType } = useAuth()
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex font-sans" @click="closeDropdowns">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-white border-r border-gray-200 shadow-sm flex-shrink-0 hidden md:flex flex-col z-20"
      @click.stop
    >
      <div class="h-16 flex items-center px-6 border-b border-gray-100">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="bg-primary-600 text-white p-1 rounded-md font-bold text-lg">A</div>
          <span class="font-bold text-xl text-primary-700">Amanahmu</span>
        </NuxtLink>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <slot name="sidebar">
          <div v-if="userType === 'partner'">
             <div class="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Partner Menu
            </div>
            <NuxtLink
              to="/partner/explore"
              class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">🔍</span>
              Explore Jobs
            </NuxtLink>
            <NuxtLink
              to="/partner/dashboard"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">📊</span>
              Dashboard
            </NuxtLink>
            <NuxtLink
              to="/partner/jobs"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">💼</span>
              My Jobs
            </NuxtLink>
            <NuxtLink
              to="/partner/messages"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">💬</span>
              Messages
              <span class="ml-auto bg-primary-100 text-primary-600 py-0.5 px-2 rounded-full text-xs font-bold">2</span>
            </NuxtLink>
             <NuxtLink
              to="/partner/earnings"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">💰</span>
              Earnings
            </NuxtLink>
          </div>

          <div v-else-if="userType === 'customer'">
             <div class="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Customer Menu
            </div>
            <NuxtLink
              to="/customer/dashboard"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">🏠</span>
              Home
            </NuxtLink>
            <NuxtLink
              to="/customer/orders"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">📦</span>
              My Orders
            </NuxtLink>
             <NuxtLink
              to="/customer/favorites"
              class="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors group"
            >
              <span class="mr-3 text-gray-400 group-hover:text-primary-600">❤️</span>
              Favorites
            </NuxtLink>
          </div>
        </slot>
      </nav>

      <div class="p-4 border-t border-gray-100">
        <button
          class="flex w-full items-center px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          @click="logout"
        >
          <span class="mr-3">🚪</span> Logout
        </button>
      </div>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- Header -->
      <header
        class="bg-white h-16 shadow-sm border-b border-gray-200 flex items-center justify-between px-6 z-10"
      >
        <div class="flex items-center gap-4">
          <button class="md:hidden text-gray-500 hover:text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 class="text-lg font-semibold text-gray-800 hidden sm:block">Dashboard</h1>
        </div>

        <div class="flex items-center gap-4">
          <!-- Notification Bell -->
          <div class="relative">
            <button
              class="relative p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              @click.stop="toggleNotifications"
            >
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span
                class="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-white"
              ></span>
            </button>

            <!-- Notification Dropdown -->
            <div
              v-if="showNotifications"
              class="origin-top-right absolute right-0 mt-2 w-80 rounded-lg shadow-xl py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              @click.stop
            >
              <div class="px-4 py-3 border-b border-gray-100">
                <p class="text-sm font-semibold text-gray-900">Notifications</p>
              </div>
              <div class="max-h-60 overflow-y-auto" v-if="userType === 'partner'">
                <a
                  href="#"
                  class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <p class="text-sm font-medium text-gray-900">New Job Available</p>
                  <p class="text-xs text-gray-500 mt-1">AC Service required in Kemang area.</p>
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <p class="text-sm font-medium text-gray-900">Payment Received</p>
                  <p class="text-xs text-gray-500 mt-1">You received Rp 150.000 from Customer.</p>
                </a>
              </div>
              <div class="max-h-60 overflow-y-auto" v-else-if="userType === 'customer'">
                 <a
                  href="#"
                  class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <p class="text-sm font-medium text-gray-900">Order Update</p>
                  <p class="text-xs text-gray-500 mt-1">Your AC Cleaning status is now 'In Progress'.</p>
                </a>
                <a
                  href="#"
                  class="block px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  <p class="text-sm font-medium text-gray-900">Promo Alert</p>
                  <p class="text-xs text-gray-500 mt-1">Get 50% off on your next House Cleaning!</p>
                </a>
              </div>
              <div class="px-4 py-2 border-t border-gray-100 bg-gray-50">
                <NuxtLink
                  :to="userType === 'partner' ? '/partner/messages' : '/customer/orders'"
                  class="block text-center text-xs font-bold text-primary-600 hover:text-primary-700"
                >
                  View all notifications
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Profile Dropdown -->
          <div class="relative">
            <button
              class="flex items-center gap-3 focus:outline-none group"
              @click.stop="toggleProfile"
            >
              <div class="text-right hidden sm:block">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {{ user?.name || 'User' }}
                </p>
                <p class="text-xs text-gray-500">Professional</p>
              </div>
              <svg
                class="h-9 w-9 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            <!-- Profile Menu -->
            <div
              v-if="showProfileMenu"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-xl py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              @click.stop
            >
              <div class="px-4 py-2 border-b border-gray-100 sm:hidden">
                <p class="text-sm font-medium text-gray-900">{{ user?.name || 'User' }}</p>
              </div>
              <NuxtLink
                :to="userType === 'customer' ? '/customer/profile' : '/partner/profile'"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Your Profile
              </NuxtLink>
              <NuxtLink
                :to="userType === 'customer' ? '/customer/settings' : '/partner/settings'"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Settings
              </NuxtLink>
              <button
                class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                @click="logout"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Area -->
      <main
        class="flex-1 flex flex-col min-h-0 bg-gray-50"
        :class="$route.meta.noPadding ? 'p-0 overflow-hidden' : 'p-6 md:p-8 overflow-y-auto'"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
