<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

// Mock Data for Favorites
const favorites = [
  {
    id: 1,
    name: 'AC Cleaning Standard',
    provider: 'Cool Breeze Teknik',
    rating: 4.8,
    reviews: 120,
    price: 'Rp 75.000',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'AC & Appliances',
  },
  {
    id: 2,
    name: 'Deep House Cleaning',
    provider: 'Mama Bersih',
    rating: 4.9,
    reviews: 85,
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1581578731117-104f2a863a30?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Cleaning',
  },
  {
    id: 3,
    name: 'Garden Maintenance',
    provider: 'Green Thumb',
    rating: 4.7,
    reviews: 42,
    price: 'Rp 150.000',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    category: 'Gardening',
  },
]


const bookService = (id: number) => {
  // Mock redirect
  alert(`Redirecting to booking page for service ID: ${id}`)
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">My Favorites</h1>
      <p class="text-gray-500">Saved services and providers for quick access.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in favorites"
        :key="item.id"
        class="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
      >
        <div class="relative h-64 bg-gray-200 group">
          <img :src="item.image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
          
          <button class="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors z-10">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>

          <div class="absolute bottom-4 left-4 right-4 text-white z-10">
            <span class="inline-block px-2 py-1 bg-primary-600 rounded text-xs font-bold mb-2 shadow-sm">
              {{ item.category }}
            </span>
            <h3 class="font-bold text-xl leading-tight mb-1">{{ item.name }}</h3>
            <p class="text-sm text-gray-200 flex items-center gap-1">
              <span class="opacity-75">by</span> {{ item.provider }}
            </p>
          </div>
        </div>
        
        <div class="p-5">

           <div class="flex items-center gap-2 mb-4 text-sm">
             <div class="flex items-center text-yellow-500">
               <span class="font-bold text-gray-900 mr-1">{{ item.rating }}</span>
               <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
             </div>
             <span class="text-gray-300">•</span>
             <span class="text-gray-500">{{ item.reviews }} Reviews</span>
           </div>

           <div class="flex items-center justify-between pt-4 border-t border-gray-50">
             <span class="font-bold text-primary-600 text-lg">{{ item.price }}</span>
             <button @click="bookService(item.id)" class="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-bold hover:bg-primary-100 transition-colors">
               Book Now
             </button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
