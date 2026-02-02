<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const { loginPartner } = useAuth()
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Mock login
  if (email.value) {
    loginPartner(email.value)
  }
}
</script>

<template>
  <div>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-2">Partner Login</h2>
    <p class="text-center text-gray-500 mb-8">Access your dashboard and manage orders</p>

    <form class="space-y-6" @submit.prevent="handleLogin">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Partner Email </label>
        <div class="mt-1">
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-blue-50"
          />
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
        <div class="mt-1">
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-blue-50"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Login to Dashboard
        </button>
      </div>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600 mb-2">Not a partner yet?</p>
      <NuxtLink to="/join" class="font-medium text-primary-600 hover:text-primary-500">
        Register as a Service Provider
      </NuxtLink>
    </div>
    <div class="mt-4 text-center">
      <NuxtLink
        to="/login/customer"
        class="text-sm font-medium text-gray-500 hover:text-primary-500"
      >
        Not a partner? Login as Customer
      </NuxtLink>
    </div>
  </div>
</template>
