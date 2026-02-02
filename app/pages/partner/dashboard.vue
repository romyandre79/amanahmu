<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})
</script>

<template>
  <div>
    <!-- Welcome Section -->
    <div class="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p class="text-gray-500">Overview of your service business performance.</p>
      </div>
      <div class="flex items-center gap-3">
        <span
          class="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Online
        </span>
        <button
          class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors shadow-sm text-sm font-medium"
        >
          Withdraw Funds
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Earnings -->
      <div
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-green-50 text-green-600 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full"
            >+12.5%</span
          >
        </div>
        <p class="text-sm text-gray-500 font-medium">Total Earnings</p>
        <h3 class="text-2xl font-bold text-gray-800 mt-1">Rp 4.500.000</h3>
      </div>

      <!-- Jobs -->
      <div
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
            >This Month</span
          >
        </div>
        <p class="text-sm text-gray-500 font-medium">Completed Jobs</p>
        <h3 class="text-2xl font-bold text-gray-800 mt-1">24 Jobs</h3>
      </div>

      <!-- Rating -->
      <div
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-yellow-50 text-yellow-600 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
          </div>
          <span class="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full"
            >Top Rated</span
          >
        </div>
        <p class="text-sm text-gray-500 font-medium">Average Rating</p>
        <h3 class="text-2xl font-bold text-gray-800 mt-1">4.9 / 5.0</h3>
      </div>

      <!-- Pending -->
      <div
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="p-3 bg-orange-50 text-orange-600 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <span class="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full"
            >Action Needed</span
          >
        </div>
        <p class="text-sm text-gray-500 font-medium">Pending Requests</p>
        <h3 class="text-2xl font-bold text-gray-800 mt-1">3 Requests</h3>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- New Opportunities (Rich List) -->
      <div
        class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div class="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 class="font-bold text-gray-800 text-lg">New Opportunities</h3>
          <button class="text-primary-600 text-sm font-medium hover:text-primary-700">
            View All
          </button>
        </div>

        <div class="divide-y divide-gray-50">
          <!-- Job Card 1 -->
          <div class="p-6 hover:bg-gray-50 transition-colors group">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl"
                >
                  ❄️
                </div>
                <div>
                  <h4
                    class="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors"
                  >
                    AC Cleaning - Split Wall
                  </h4>
                  <p class="text-gray-500 text-sm flex items-center gap-1 mt-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    Jl. Kaliurang Km 5, Sleman
                  </p>
                </div>
              </div>
              <span class="font-bold text-lg text-primary-600 bg-primary-50 px-3 py-1 rounded-lg"
                >Rp 75k</span
              >
            </div>

            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4 pl-16">
              <span
                class="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600"
              >
                📅 Today, 14:00
              </span>
              <span
                class="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600"
              >
                📏 2 Units
              </span>
            </div>

            <div class="flex gap-3 pl-16">
              <button
                class="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-700 hover:shadow transition-all"
              >
                Accept Job
              </button>
              <button
                class="bg-white border border-gray-200 text-gray-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>

          <!-- Job Card 2 -->
          <div class="p-6 hover:bg-gray-50 transition-colors group">
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xl"
                >
                  🔧
                </div>
                <div>
                  <h4
                    class="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors"
                  >
                    Washing Machine Repair
                  </h4>
                  <p class="text-gray-500 text-sm flex items-center gap-1 mt-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    Pogung Baru, Blok A
                  </p>
                </div>
              </div>
              <span class="font-bold text-lg text-primary-600 bg-primary-50 px-3 py-1 rounded-lg"
                >Rp 150k</span
              >
            </div>

            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4 pl-16">
              <span
                class="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600"
              >
                📅 Tomorrow, 09:00
              </span>
              <span
                class="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600"
              >
                ⚠️ Urgent
              </span>
            </div>

            <div class="flex gap-3 pl-16">
              <button
                class="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-700 hover:shadow transition-all"
              >
                Accept Job
              </button>
              <button
                class="bg-white border border-gray-200 text-gray-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity / Side Panel -->
      <div class="space-y-6">
        <!-- Scheduled Jobs Today -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-800 mb-4">Today's Schedule</h3>
          <div class="relative pl-4 border-l-2 border-primary-200 py-2 space-y-6">
            <div class="relative">
              <span
                class="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary-500 ring-4 ring-white"
              ></span>
              <p class="text-xs text-gray-500 font-bold mb-1">08:00 AM</p>
              <p class="text-sm font-medium text-gray-800">Plumbing Service @ Seturan</p>
              <span
                class="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full"
                >Completed</span
              >
            </div>
            <div class="relative">
              <span
                class="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white"
              ></span>
              <p class="text-xs text-gray-500 font-bold mb-1">02:00 PM</p>
              <p class="text-sm font-medium text-gray-800">CCTV Installation @ Bantul</p>
              <span
                class="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full"
                >Upcoming</span
              >
            </div>
          </div>
        </div>

        <!-- Promotion Banner -->
        <div
          class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white text-center shadow-lg"
        >
          <p class="font-bold text-lg mb-2">Boost Your Visibility!</p>
          <p class="text-primary-100 text-sm mb-4">Get 3x more leads by activating Premium.</p>
          <button
            class="bg-white text-primary-700 font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-50 w-full"
          >
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
