<script setup lang="ts">
const categories = [
  'All Services',
  'Cleaning',
  'AC & Appliances',
  'Plumbing',
  'Renovation',
  'Gardening',
]
const activeCategory = ref('All Services')

const services = [
  {
    id: 1,
    name: 'AC Cleaning Standard',
    category: 'AC & Appliances',
    price: 'Rp 75.000',
    rating: 4.8,
    reviews: 120,
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Home Deep Cleaning',
    category: 'Cleaning',
    price: 'Rp 350.000',
    rating: 4.9,
    reviews: 85,
    image:
      'https://images.unsplash.com/photo-1581578731117-10452a792edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Leaky Faucet Repair',
    category: 'Plumbing',
    price: 'Rp 150.000',
    rating: 4.7,
    reviews: 45,
    image:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Sofa Cleaning',
    category: 'Cleaning',
    price: 'Rp 200.000',
    rating: 4.8,
    reviews: 62,
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Garden Maintenance',
    category: 'Gardening',
    price: 'Rp 500.000',
    rating: 4.9,
    reviews: 24,
    image:
      'https://images.unsplash.com/photo-1599818485203-d2d85b4b1a6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Refrigerator Repair',
    category: 'AC & Appliances',
    price: 'Rp 250.000',
    rating: 4.6,
    reviews: 30,
    image:
      'https://images.unsplash.com/photo-1571175443880-49e1d58b7948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
]

const filteredServices = computed(() => {
  if (activeCategory.value === 'All Services') return services
  return services.filter((s) => s.category === activeCategory.value)
})
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-16">
    <!-- Header -->
    <div
      class="bg-white shadow-sm border-b border-gray-200 py-12 px-6 sm:px-12 lg:px-16 text-center"
    >
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Find the Perfect Service</h1>
      <div class="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="What service do you need today?"
          class="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm text-gray-700"
        />
        <svg
          class="w-6 h-6 text-gray-400 absolute left-4 top-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-8">
      <!-- Categories -->
      <div class="flex flex-wrap gap-3 mb-10 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
          :class="
            activeCategory === cat
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          "
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NuxtLink
          v-for="service in filteredServices"
          :key="service.id"
          :to="`/services/${service.id}`"
          class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1 block group"
        >
          <div class="relative h-48 bg-gray-200 overflow-hidden">
            <img
              :src="service.image"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm"
            >
              {{ service.category }}
            </div>
          </div>
          <div class="p-4">
            <h3
              class="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary-600 transition-colors"
            >
              {{ service.name }}
            </h3>
            <div class="flex items-center gap-1 mb-3">
              <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <span class="font-bold text-gray-800 text-sm">{{ service.rating }}</span>
              <span class="text-gray-400 text-sm">({{ service.reviews }})</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-primary-600 font-bold text-lg">{{ service.price }}</span>
              <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Starts from</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
