<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const showWithdrawModal = ref(false)
</script>

<template>
  <div>
    <div class="mb-6 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Earnings & Finance</h1>
        <p class="text-gray-500">Track your revenue and withdrawal history.</p>
      </div>
      <button
        class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors shadow-sm font-medium"
        @click="showWithdrawModal = true"
      >
        Request Withdrawal
      </button>
    </div>

    <!-- Balance Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white shadow-lg"
      >
        <p class="text-primary-100 font-medium text-sm">Available Balance</p>
        <h2 class="text-3xl font-bold mt-1">Rp 4.500.000</h2>
        <p class="text-xs text-primary-200 mt-4">Last updated: Just now</p>
      </div>

      <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <p class="text-gray-500 font-medium text-sm">Pending Clearance</p>
        <h2 class="text-3xl font-bold text-gray-800 mt-1">Rp 1.250.000</h2>
        <p class="text-xs text-gray-400 mt-4">Funds from recent jobs (held for 24h)</p>
      </div>

      <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <p class="text-gray-500 font-medium text-sm">Total Withdrawals</p>
        <h2 class="text-3xl font-bold text-gray-800 mt-1">Rp 12.000.000</h2>
        <p class="text-xs text-gray-400 mt-4">Lifetime earnings withdrawn</p>
      </div>
    </div>

    <!-- Charts Mockup -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
      <div class="flex justify-between items-center mb-6">
        <h3 class="font-bold text-gray-800">Revenue Overview</h3>
        <select class="border border-gray-300 rounded-md text-sm px-2 py-1">
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>
      </div>
      <!-- Simple Bar Chart CSS Mockup -->
      <div class="h-64 flex items-end justify-between gap-2 px-2">
        <div
          v-for="h in [40, 65, 30, 80, 55, 90, 45, 70, 60, 100, 75, 50]"
          :key="h"
          class="w-full bg-primary-100 rounded-t-md relative group hover:bg-primary-200 transition-colors"
          :style="`height: ${h}%`"
        >
          <div
            class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {{ h * 10 }}k
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-2 text-xs text-gray-400 px-2">
        <span
          v-for="m in [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ]"
          :key="m"
          >{{ m }}</span
        >
      </div>
    </div>

    <!-- Transaction History -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
        <h3 class="font-bold text-gray-800">Recent Transactions</h3>
      </div>
      <table class="w-full text-left text-sm">
        <thead class="bg-gray-50 text-gray-500 uppercase text-xs">
          <tr>
            <th class="px-6 py-3 font-medium">Date</th>
            <th class="px-6 py-3 font-medium">Description</th>
            <th class="px-6 py-3 font-medium">Type</th>
            <th class="px-6 py-3 font-medium">Amount</th>
            <th class="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 text-gray-500">Oct 24, 2026</td>
            <td class="px-6 py-4 font-medium text-gray-900">Payment for Order #JOB-859</td>
            <td class="px-6 py-4 text-green-600">Credit</td>
            <td class="px-6 py-4 font-bold text-gray-800">+ Rp 75.000</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold"
                >Completed</span
              >
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 text-gray-500">Oct 22, 2026</td>
            <td class="px-6 py-4 font-medium text-gray-900">Withdrawal to BCA</td>
            <td class="px-6 py-4 text-red-600">Debit</td>
            <td class="px-6 py-4 font-bold text-gray-800">- Rp 500.000</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold"
                >Success</span
              >
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 text-gray-500">Oct 20, 2026</td>
            <td class="px-6 py-4 font-medium text-gray-900">Payment for Order #JOB-821</td>
            <td class="px-6 py-4 text-green-600">Credit</td>
            <td class="px-6 py-4 font-bold text-gray-800">+ Rp 150.000</td>
            <td class="px-6 py-4">
              <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold"
                >Completed</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Withdrawal Modal -->
    <!-- Withdrawal Modal -->
    <div
      v-if="showWithdrawModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          @click="showWithdrawModal = false"
        ></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                  Request Withdrawal
                </h3>
                <div class="mt-2 space-y-4">
                  <p class="text-sm text-gray-500">
                    Available Balance: <span class="font-bold text-gray-900">Rp 4.500.000</span>
                  </p>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">Bank Name</label>
                    <select
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border"
                    >
                      <option>BCA</option>
                      <option>Mandiri</option>
                      <option>BRI</option>
                      <option>BNI</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">Account Number</label>
                    <input
                      type="text"
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      placeholder="e.g 1234567890"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">Amount</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div
                        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                      >
                        <span class="text-gray-500 sm:text-sm">Rp</span>
                      </div>
                      <input
                        type="number"
                        class="block w-full pl-10 pr-12 border border-gray-300 rounded-md py-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
              @click="showWithdrawModal = false"
            >
              Submit Request
            </button>
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="showWithdrawModal = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
