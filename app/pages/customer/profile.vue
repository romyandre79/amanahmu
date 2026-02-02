<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const user = ref({
  name: 'Romy Andre',
  email: 'romy@example.com',
  phone: '+62 812 3456 7890',
  address: 'Jl. Sudirman No. 123, Jakarta Selatan',
  avatar: 'https://ui-avatars.com/api/?name=Romy+Andre&background=0D8ABC&color=fff',
})

const isEditing = ref(false)

const saveProfile = () => {
  isEditing.value = false
  // Mock save
  alert('Profile updated successfully!')
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">My Profile</h1>
      <p class="text-gray-500">Manage your personal information and account settings.</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-6 sm:p-8">
        <div class="flex flex-col sm:flex-row gap-8">
          <!-- Avatar Section -->
          <div class="flex-shrink-0 flex flex-col items-center gap-4">
            <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-100 relative group">
              <img :src="user.avatar" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span class="text-white text-xs font-bold">Change</span>
              </div>
            </div>
            <p class="text-sm text-gray-400">Join Date: Jan 2026</p>
          </div>

          <!-- Form Section -->
          <div class="flex-1 space-y-6">
            <div class="flex justify-between items-center pb-4 border-b border-gray-100">
              <h3 class="text-lg font-bold text-gray-900">Personal Details</h3>
              <button
                v-if="!isEditing"
                @click="isEditing = true"
                class="text-primary-600 hover:text-primary-700 text-sm font-bold"
              >
                Edit Profile
              </button>
               <div v-else class="flex gap-2">
                 <button
                  @click="isEditing = false"
                  class="text-gray-500 hover:text-gray-700 text-sm font-medium px-3 py-1"
                >
                  Cancel
                </button>
                <button
                  @click="saveProfile"
                  class="bg-primary-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary-700"
                >
                  Save Changes
                </button>
               </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  v-model="user.name"
                  :disabled="!isEditing"
                  type="text"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  v-model="user.email"
                  :disabled="!isEditing"
                  type="email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  v-model="user.phone"
                  :disabled="!isEditing"
                  type="tel"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
               <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  v-model="user.address"
                  :disabled="!isEditing"
                  rows="3"
                  class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all disabled:bg-gray-50 disabled:text-gray-500"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
