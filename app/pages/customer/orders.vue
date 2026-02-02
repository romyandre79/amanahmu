<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const activeTab = ref('active')

const tabs = [
  { id: 'all', label: 'All Orders' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
]

// Mock Data
const orders = [
  {
    id: 'REQ-2026-001',
    serviceName: 'AC Cleaning Standard',
    providerName: 'Cool Breeze Teknik',
    date: 'Today, 10:00 AM',
    status: 'In Progress',
    statusColor: 'yellow',
    price: 'Rp 75.000',
    icon: '❄️',
    description: 'Cleaning for 2 split AC units in master bedroom.',
  },
  {
    id: 'REQ-2026-002',
    serviceName: 'Plumbing Repair',
    providerName: 'Handyman Pro',
    date: 'Yesterday, 2:00 PM',
    status: 'Pending',
    statusColor: 'blue',
    price: 'Rp 150.000',
    icon: '🔧',
    description: 'Fixing leaking pipe in the kitchen sink.',
  },
  {
    id: 'REQ-2026-003',
    serviceName: 'House Cleaning',
    providerName: 'Clean & Shine',
    date: 'Last Week',
    status: 'Completed',
    statusColor: 'green',
    price: 'Rp 200.000',
    icon: '🧹',
    description: 'Deep cleaning of living room and kitchen.',
  },

]

const filteredOrders = computed(() => {
  if (activeTab.value === 'all') {
    return orders
  }
  if (activeTab.value === 'active') {
    return orders.filter(
      (order) => order.status === 'In Progress' || order.status === 'Pending'
    )
  }
  if (activeTab.value === 'completed') {
    return orders.filter((order) => order.status === 'Completed')
  }
  if (activeTab.value === 'cancelled') {
    return orders.filter((order) => order.status === 'Cancelled')
  }
  return orders
})

const showOrderModal = ref(false)
const selectedOrder = ref<any>(null)

const viewDetails = (order: any) => {
  selectedOrder.value = order
  showOrderModal.value = true
}

const trackOrder = (order: any) => {
  selectedOrder.value = order
  showOrderModal.value = true
}

const bookAgain = (serviceName: string) => {
  alert(`Redirecting to book ${serviceName} again...`)
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">My Orders</h1>
      <p class="text-gray-500">Manage and track your service requests.</p>
    </div>

    <!-- Tabs -->
    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            activeTab === tab.id
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors',
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- Orders List -->
    <div class="space-y-4">
      <div
        v-for="order in filteredOrders"
        :key="order.id"
        class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div class="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-2xl"
            >
              {{ order.icon }}
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-lg">{{ order.serviceName }}</h3>
              <p class="text-sm text-gray-500">
                Provided by <span class="font-medium text-gray-700">{{ order.providerName }}</span>
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between md:justify-end gap-4 min-w-[200px]">
            <span class="text-sm text-gray-500">{{ order.date }}</span>
            <span
              :class="`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border bg-${order.statusColor}-100 text-${order.statusColor}-700 border-${order.statusColor}-200`"
            >
              {{ order.status }}
            </span>
          </div>
        </div>

        <div class="border-t border-gray-50 pt-4 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <p class="text-gray-600 text-sm mb-1">
              <span class="font-bold text-gray-900">Order ID:</span> {{ order.id }}
            </p>
             <p class="text-gray-600 text-sm max-w-xl">
              {{ order.description }}
            </p>
          </div>
          <div class="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
             <div class="text-right mr-2 hidden md:block">
              <p class="text-xs text-gray-500">Total Price</p>
              <p class="font-bold text-gray-900 text-lg">{{ order.price }}</p>
            </div>
            <button
              @click="viewDetails(order)"
              class="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              View Details
            </button>
            <button
               v-if="order.status === 'Completed'"
               @click="bookAgain(order.serviceName)"
              class="flex-1 md:flex-none px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors"
            >
              Book Again
            </button>
             <button
               v-else
               @click="trackOrder(order)"
              class="flex-1 md:flex-none px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors"
            >
              Track Order
            </button>
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
