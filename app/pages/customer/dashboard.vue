<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})
const router = useRouter()

const navigateToServices = () => {
  router.push('/services')
}

// Mock Data (moved from hardcoded template to script for filtering)
const requests = [
  {
    id: 'REQ-2026-001',
    service: 'AC Cleaning',
    date: 'Today, 10:00 AM',
    status: 'In Progress',
    statusColor: 'yellow',
    icon: '❄️',
    price: 'Rp 75.000',
    type: 'Fixed Price',
    serviceName: 'AC Cleaning Standard',
    providerName: 'Cool Breeze Teknik',
    description: 'Cleaning for 2 split AC units in master bedroom.',
  },
  {
    id: 'REQ-2026-002',
    service: 'Plumbing Repair',
    date: 'Yesterday',
    status: 'Pending',
    statusColor: 'blue',
    icon: '🔧',
    price: 'Rp 150.000',
    type: 'Est. Price',
    serviceName: 'Plumbing Repair',
    providerName: 'Handyman Pro',
    description: 'Fixing leaking pipe in the kitchen sink.',
  },
  {
    id: 'REQ-2026-003',
    service: 'House Cleaning',
    date: 'Last Week',
    status: 'Completed',
    statusColor: 'green',
    icon: '🧹',
    price: 'Rp 200.000',
    type: 'Fixed Price',
    serviceName: 'House Cleaning',
    providerName: 'Clean & Shine',
    description: 'Deep cleaning of living room and kitchen.',
  },
]

const activeFilter = ref('All')
const showOrderModal = ref(false)
const selectedOrder = ref<any>(null)

const filteredRequests = computed(() => {
  if (activeFilter.value === 'All') return requests
  if (activeFilter.value === 'Active') {
    return requests.filter(r => ['Pending', 'In Progress'].includes(r.status))
  }
  return requests.filter(r => r.status === activeFilter.value)
})

const viewDetails = (request: any) => {
  selectedOrder.value = request
  showOrderModal.value = true
}
</script>

<template>
  <div>
    <div class="mb-8 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">My Requests</h1>
        <p class="text-gray-500">Track and manage your service bookings.</p>
      </div>
      <button
        @click="navigateToServices"
        class="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors shadow-sm font-medium flex items-center gap-2"
      >
        <span class="text-xl leading-none">+</span> Book New Service
      </button>
    </div>

    <!-- Stats / Status Board -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        @click="activeFilter = 'Pending'"
        :class="activeFilter === 'Pending' ? 'ring-2 ring-blue-500 shadow-md transform scale-[1.02]' : ''"
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center transition-all hover:shadow-md cursor-pointer border-l-4 border-l-blue-500"
      >
        <div class="p-3 bg-blue-50 text-blue-600 rounded-full mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Pending</p>
          <p class="text-2xl font-bold text-gray-800">2 Requests</p>
        </div>
      </div>
      <div
        @click="activeFilter = 'In Progress'"
        :class="activeFilter === 'In Progress' ? 'ring-2 ring-yellow-500 shadow-md transform scale-[1.02]' : ''"
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center transition-all hover:shadow-md cursor-pointer border-l-4 border-l-yellow-500"
      >
        <div class="p-3 bg-yellow-50 text-yellow-600 rounded-full mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-500 font-medium">In Progress</p>
          <p class="text-2xl font-bold text-gray-800">1 Service</p>
        </div>
      </div>
      <div
        @click="activeFilter = 'Completed'"
        :class="activeFilter === 'Completed' ? 'ring-2 ring-green-500 shadow-md transform scale-[1.02]' : ''"
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center transition-all hover:shadow-md cursor-pointer border-l-4 border-l-green-500"
      >
        <div class="p-3 bg-green-50 text-green-600 rounded-full mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-500 font-medium">Completed</p>
          <p class="text-2xl font-bold text-gray-800">14 Orders</p>
        </div>
      </div>
    </div>

    <!-- Recent Activity List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        class="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50"
      >
        <h3 class="font-bold text-gray-800">Recent Requests</h3>
        <div class="flex gap-2 flex-wrap">
          <button
            @click="activeFilter = 'All'"
            :class="activeFilter === 'All' ? 'text-primary-600 bg-primary-50' : 'text-gray-500 hover:bg-gray-50'"
            class="text-sm font-medium px-3 py-1 rounded transition-colors"
          >
            All
          </button>
          <button
            @click="activeFilter = 'Active'"
            :class="activeFilter === 'Active' ? 'text-primary-600 bg-primary-50' : 'text-gray-500 hover:bg-gray-50'"
            class="text-sm font-medium px-3 py-1 rounded transition-colors"
          >
            Active
          </button>
          <button
            @click="activeFilter = 'Pending'"
            :class="activeFilter === 'Pending' ? 'text-primary-600 bg-primary-50' : 'text-gray-500 hover:bg-gray-50'"
            class="text-sm font-medium px-3 py-1 rounded transition-colors"
          >
            Pending
          </button>
          <button
            @click="activeFilter = 'In Progress'"
            :class="activeFilter === 'In Progress' ? 'text-primary-600 bg-primary-50' : 'text-gray-500 hover:bg-gray-50'"
            class="text-sm font-medium px-3 py-1 rounded transition-colors whitespace-nowrap"
          >
            In Progress
          </button>
          <button
            @click="activeFilter = 'Completed'"
            :class="activeFilter === 'Completed' ? 'text-primary-600 bg-primary-50' : 'text-gray-500 hover:bg-gray-50'"
            class="text-sm font-medium px-3 py-1 rounded transition-colors"
          >
            Completed
          </button>
        </div>
      </div>
      <div>
        <div
          v-for="req in filteredRequests"
          :key="req.id"
          @click="viewDetails(req)"
          class="flex items-center justify-between p-6 border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer group"
        >
          <div class="flex items-center gap-5">
            <div
              class="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-200"
            >
              {{ req.icon }}
            </div>
            <div>
              <h4 class="font-bold text-gray-800 text-lg group-hover:text-primary-700">
                {{ req.service }}
              </h4>
              <div class="flex items-center gap-3 text-sm text-gray-500 mt-1">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {{ req.date }}
                </span>
                <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{{ req.id }}</span>
              </div>
            </div>
          </div>
          <div class="text-right flex items-center gap-6">
            <div>
              <p class="font-bold text-gray-900">{{ req.price }}</p>
              <p class="text-xs text-secondary-500">{{ req.type }}</p>
            </div>
            <span
              :class="`bg-${req.statusColor}-100 text-${req.statusColor}-700 border-${req.statusColor}-200`"
              class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border"
              >{{ req.status }}</span
            >
            <svg
              class="w-5 h-5 text-gray-400 hover:text-primary-600 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- Order Details & Tracking Modal -->
    <div
      v-if="showOrderModal && selectedOrder"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in-up max-h-[90vh] flex flex-col">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <h2 class="text-xl font-bold text-gray-900">Order Details</h2>
            <p class="text-xs text-gray-500">{{ selectedOrder.id }} • {{ selectedOrder.date }}</p>
          </div>
          <button @click="showOrderModal = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 overflow-y-auto">
          <!-- Service Info -->
          <div class="flex items-start gap-4 mb-8">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-3xl">
              {{ selectedOrder.icon }}
            </div>
            <div>
              <h3 class="font-bold text-lg text-gray-900">{{ selectedOrder.serviceName }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ selectedOrder.description }}</p>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500">Provider:</span>
                <span class="font-bold text-gray-800">{{ selectedOrder.providerName }}</span>
              </div>
            </div>
          </div>

          <!-- Tracking Timeline -->
          <div class="mb-8">
            <h4 class="font-bold text-gray-900 mb-4">Order Status</h4>
            <div class="relative pl-4 border-l-2 border-gray-200 space-y-8">
              <!-- Step 1: Placed -->
              <div class="relative">
                <div class="absolute -left-[21px] bg-green-500 h-4 w-4 rounded-full border-2 border-white ring-2 ring-green-100"></div>
                <h5 class="font-bold text-gray-900 text-sm">Order Placed</h5>
                <p class="text-xs text-gray-500">Order received by system.</p>
              </div>
              
              <!-- Step 2: Confirmed -->
              <div class="relative">
                <div 
                  class="absolute -left-[21px] h-4 w-4 rounded-full border-2 border-white ring-2"
                  :class="selectedOrder.status !== 'Pending' ? 'bg-green-500 ring-green-100' : 'bg-gray-300 ring-gray-100'"
                ></div>
                <h5 class="font-bold text-gray-900 text-sm">Provider Confirmed</h5>
                <p class="text-xs text-gray-500">Provider has accepted the job.</p>
              </div>

              <!-- Step 3: In Progress -->
               <div class="relative">
                <div 
                  class="absolute -left-[21px] h-4 w-4 rounded-full border-2 border-white ring-2"
                  :class="['In Progress', 'Completed'].includes(selectedOrder.status) ? 'bg-green-500 ring-green-100' : 'bg-gray-300 ring-gray-100'"
                ></div>
                <h5 class="font-bold text-gray-900 text-sm">Work in Progress</h5>
                <p class="text-xs text-gray-500">Provider is performing the service.</p>
              </div>

              <!-- Step 4: Completed -->
               <div class="relative">
                <div 
                  class="absolute -left-[21px] h-4 w-4 rounded-full border-2 border-white ring-2"
                  :class="selectedOrder.status === 'Completed' ? 'bg-green-500 ring-green-100' : 'bg-gray-300 ring-gray-100'"
                ></div>
                <h5 class="font-bold text-gray-900 text-sm">Completed</h5>
                <p class="text-xs text-gray-500">Service finished and payment confirmed.</p>
              </div>
            </div>
          </div>

          <!-- Payment Info -->
          <div class="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
            <span class="text-gray-600 font-medium">Total Amount</span>
            <span class="text-xl font-bold text-primary-600">{{ selectedOrder.price }}</span>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
           <button
            @click="showOrderModal = false"
            class="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          <button
            v-if="selectedOrder.status === 'In Progress'"
            class="px-6 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors"
          >
            Message Provider
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
