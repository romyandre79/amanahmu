<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const searchQuery = ref('')
const location = ref('Near Me')

const recommendations = [
  {
    id: 101,
    title: 'AC Repair 5 Units',
    location: 'Jakarta Selatan',
    budget: 'Rp 2.500.000',
    type: 'Project',
    posted: '2h ago',
    urgent: true,
  },
  {
    id: 102,
    title: 'Office Deep Cleaning',
    location: 'Jakarta Pusat',
    budget: 'Rp 1.500.000',
    type: 'Service',
    posted: '4h ago',
    urgent: false,
  },
  {
    id: 103,
    title: 'Bathroom Renovation',
    location: 'Depok',
    budget: 'Rp 15.000.000',
    type: 'Project',
    posted: '1d ago',
    urgent: true,
  },
]

const jobs = [
  {
    id: 1,
    title: 'Fix Leaking Roof',
    category: 'Renovation',
    budget: 'Rp 500.000 - 1.000.000',
    location: 'Tangerang',
    bids: 3,
    deadline: '3 days left',
    description:
      'Looking for an experienced handyman to fix a leak in the master bedroom roof. Tiles need replacement.',
  },
  {
    id: 2,
    title: 'Garden Maintenance',
    category: 'Gardening',
    budget: 'Rp 300.000',
    location: 'Jakarta Barat',
    bids: 12,
    deadline: '5 days left',
    description: 'Weekly garden maintenance for a small home garden. Trimming and watering needed.',
  },
  {
    id: 3,
    title: 'Install 3 AC Units',
    category: 'AC & Appliances',
    budget: 'Rp 900.000',
    location: 'Jakarta Utara',
    bids: 5,
    deadline: '1 day left',
    description: 'Installation of 3 new split AC units. Pipes and brackets provided.',
  },
  {
    id: 4,
    title: 'Full House Painting',
    category: 'Renovation',
    budget: 'Rp 5.000.000+',
    location: 'Bekasi',
    bids: 8,
    deadline: '1 week left',
    description: 'Interior and exterior painting for a 2-story house. Paint provided by owner.',
  },
  {
    id: 5,
    title: 'Sofa Cleaning',
    category: 'Cleaning',
    budget: 'Rp 250.000',
    location: 'Bogor',
    bids: 1,
    deadline: '2 days left',
    description: 'Deep cleaning for one 3-seater sofa and two armchairs.',
  },
]

const showBidModal = ref(false)
const bidJob = ref<any>(null)
const bidAmount = ref('')
const coverLetter = ref('')

const openBidModal = (jobId: number) => {
  const job = jobs.find((j) => j.id === jobId) || recommendations.find((r) => r.id === jobId)
  if (job) {
    bidJob.value = job
    bidAmount.value = ''
    coverLetter.value = ''
    showBidModal.value = true
  }
}

const submitBid = () => {
    if (!bidAmount.value || !coverLetter.value) {
        alert('Please fill in all fields')
        return
    }
    // Mock submission
    alert(`Bid of ${bidAmount.value} submitted for ${bidJob.value.title}!`)
    showBidModal.value = false
}


</script>

<template>
  <div class="p-6">
    <!-- Header / Search (Glints Style) -->
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Find New Opportunities</h1>
      <p class="text-gray-500 mb-6">Explore projects and service requests tailored for you.</p>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <svg
            class="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
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
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by skills, category, or keywords"
            class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
          />
        </div>
        <div class="w-full md:w-48 relative">
          <svg
            class="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <select
            v-model="location"
            class="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
          >
            <option>Near Me</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
          </select>
        </div>
        <button
          class="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-sm"
        >
          Search
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Main Job Feed -->
      <div class="lg:col-span-3 space-y-6">
        <!-- For You Section (Glints) -->
        <div class="mb-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-gray-900">Recommended For You</h2>
            <a href="#" class="text-primary-600 text-sm font-medium hover:underline">View All</a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="rec in recommendations"
              :key="rec.id"
              class="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl border border-primary-100 hover:shadow-md transition-shadow relative"
            >
              <div v-if="rec.urgent" class="absolute top-3 right-3 flex h-3 w-3">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              <h3 class="font-bold text-gray-900 mb-1">{{ rec.title }}</h3>
              <p class="text-sm text-gray-500 mb-3">{{ rec.location }}</p>
              <p class="text-primary-700 font-bold mb-4">{{ rec.budget }}</p>
              <button
                class="w-full bg-white border border-primary-200 text-primary-700 py-2 rounded-lg text-sm font-bold hover:bg-primary-50 transition-colors"
                @click="openBidModal(rec.id)"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>

        <!-- Job List (Projects.co.id Style) -->
        <div>
          <h2 class="text-lg font-bold text-gray-900 mb-4">Newest Projects</h2>
          <div class="space-y-4">
            <div
              v-for="job in jobs"
              :key="job.id"
              class="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <div class="flex justify-between items-start mb-2">
                <div>
                  <span
                    class="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md mb-2 inline-block"
                    >{{ job.category }}</span
                  >
                  <h3 class="text-xl font-bold text-gray-900">{{ job.title }}</h3>
                </div>
                <div class="text-right">
                  <p class="text-lg font-bold text-gray-900">{{ job.budget }}</p>
                  <p class="text-xs text-gray-500">Budget</p>
                </div>
              </div>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ job.description }}</p>

              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {{ job.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {{ job.deadline }}
                  </span>
                  <span class="flex items-center gap-1 font-medium text-gray-700">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {{ job.bids }} Bids
                  </span>
                </div>
                <div class="flex gap-3">
                  <button
                    class="px-6 py-2 bg-primary-600 text-white rounded-lg font-bold text-sm hover:bg-primary-700 transition-transform hover:-translate-y-0.5"
                    @click="openBidModal(job.id)"
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Filters -->
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-xl border border-gray-200">
          <h3 class="font-bold text-gray-900 mb-4">Filter By Category</h3>
          <div class="space-y-2">
            <label class="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked
                class="rounded text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-gray-600 text-sm">All Categories</span>
            </label>
            <label class="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500" />
              <span class="ml-2 text-gray-600 text-sm">AC & Appliances</span>
            </label>
            <label class="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500" />
              <span class="ml-2 text-gray-600 text-sm">Renovation</span>
            </label>
            <label class="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="rounded text-primary-600 focus:ring-primary-500" />
              <span class="ml-2 text-gray-600 text-sm">Cleaning</span>
            </label>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200">
          <h3 class="font-bold text-gray-900 mb-4">Budget Range</h3>
          <div class="space-y-4">
            <div>
              <label class="text-xs text-gray-500">Min Budget</label>
              <input
                type="number"
                placeholder="Rp 0"
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary-500"
              />
            </div>
            <div>
              <label class="text-xs text-gray-500">Max Budget</label>
              <input
                type="number"
                placeholder="Rp 10.000.000"
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bidding Modal -->
    <div
      v-if="showBidModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-fade-in-up">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-900">Place a Bid</h2>
          <button @click="showBidModal = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div v-if="bidJob" class="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h3 class="font-bold text-gray-900">{{ bidJob.title }}</h3>
          <p class="text-sm text-gray-500 mb-2">{{ bidJob.category }} • {{ bidJob.location }}</p>
          <div class="text-sm font-medium text-primary-700">
            Client Budget: {{ bidJob.budget }}
          </div>
        </div>

        <div class="space-y-4 mb-8">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Your Bid Amount (Rp)</label>
            <input
              v-model="bidAmount"
              type="number"
              placeholder="e.g. 750000"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Cover Letter / Proposal</label>
            <textarea
              v-model="coverLetter"
              rows="4"
              placeholder="Describe why you are the best fit for this job..."
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            @click="showBidModal = false"
            class="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="submitBid"
            class="flex-1 px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
