<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
})

const notificationsEnabled = ref(true)
const emailUpdates = ref(false)
const language = ref('en')

const saveSettings = () => {
    // Mock save
    alert('Settings saved successfully!')
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="text-gray-500">Manage your application preferences.</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-8">
        <!-- Notification Settings -->
        <section>
            <h3 class="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
            <div class="space-y-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="font-medium text-gray-800">Push Notifications</p>
                        <p class="text-sm text-gray-500">Receive alerts about your order status.</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="notificationsEnabled" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                </div>
                 <div class="flex items-center justify-between">
                    <div>
                        <p class="font-medium text-gray-800">Email Updates</p>
                        <p class="text-sm text-gray-500">Receive newsletters and promotional emails.</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="emailUpdates" class="sr-only peer">
                         <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                </div>
            </div>
        </section>

         <hr class="border-gray-100" />

        <!-- Language Settings -->
        <section>
             <h3 class="text-lg font-bold text-gray-900 mb-4">Language</h3>
             <div class="max-w-xs">
                 <select v-model="language" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all">
                     <option value="en">English</option>
                     <option value="id">Bahasa Indonesia</option>
                     <option value="zh">Chinese (Simplified)</option>
                 </select>
             </div>
        </section>
        
        <div class="pt-4">
            <button @click="saveSettings" class="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-700 transition-colors">
                Save Changes
            </button>
        </div>
    </div>
  </div>
</template>
