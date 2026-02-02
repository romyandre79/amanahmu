<script setup lang="ts">
const route = useRoute()
const serviceId = route.params.id

// Mock Data
const service = {
  id: serviceId,
  name: 'AC Cleaning Standard',
  category: 'AC & Appliances',
  price: 'Rp 75.000',
  description:
    'Complete cleaning for your split AC unit. Includes cleaning of indoor and outdoor units, gas pressure check, and drainage flushing. Our certified technicians ensure your AC runs efficiently and provides clean, cool air.',
  features: [
    'Indoor unit cleaning',
    'Outdoor unit cleaning',
    'Freon pressure check',
    '30-day warranty',
  ],
  rating: 4.8,
  reviewsCount: 120,
  image:
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  provider: {
    name: 'Cool Breeze Teknik',
    avatar: 'https://ui-avatars.com/api/?name=Cool+Breeze',
    rating: 4.9,
    jobs: 540,
  },
}

const handleBookNow = () => {
    alert('Redirecting to checkout for: ' + service.name)
}

const handleWishlist = () => {
    alert('Added ' + service.name + ' to your wishlist!')
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-20">
    <!-- Breadcrumbs -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/services" class="hover:text-primary-600">Services</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-900 font-medium">{{ service.name }}</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Image -->
          <div class="rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-200 relative">
            <img :src="service.image" class="w-full h-full object-cover" />
            <div
              class="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow-sm"
            >
              {{ service.category }}
            </div>
          </div>

          <!-- Title & Reviews -->
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ service.name }}</h1>
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1 text-yellow-500">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <span class="font-bold text-gray-900">{{ service.rating }}</span>
              </div>
              <span>•</span>
              <span>{{ service.reviewsCount }} Reviews</span>
              <span>•</span>
              <span class="text-green-600 font-medium">Available Today</span>
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Description</h2>
            <p class="text-gray-600 leading-relaxed mb-6">{{ service.description }}</p>

            <h3 class="font-bold text-gray-800 mb-3">What's Included:</h3>
            <ul class="space-y-2">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-4">
            <div class="flex justify-between items-end mb-6">
              <div>
                <p class="text-sm text-gray-500 mb-1">Total Price</p>
                <span class="text-3xl font-bold text-primary-600">{{ service.price }}</span>
              </div>
              <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold"
                >Best Value</span
              >
            </div>

            <div class="mb-6 pb-6 border-b border-gray-100">
              <p class="text-sm font-semibold text-gray-700 mb-3">Service Provider</p>
              <div class="flex items-center gap-3">
                <img :src="service.provider.avatar" class="w-10 h-10 rounded-full" />
                <div>
                  <h4 class="font-bold text-gray-900 text-sm">{{ service.provider.name }}</h4>
                  <p class="text-xs text-gray-500">
                    ★ {{ service.provider.rating }} • {{ service.provider.jobs }} Jobs
                  </p>
                </div>
              </div>
            </div>

            <button
              @click="handleBookNow"
              class="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-transform hover:-translate-y-0.5 shadow-md mb-3"
            >
              Book Now
            </button>
            <button
              @click="handleWishlist"
              class="w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
