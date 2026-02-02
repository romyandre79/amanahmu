<script setup lang="ts"></script>

<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div
      class="relative bg-primary-700 py-20 px-6 sm:px-12 lg:px-16 text-center text-white overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"
      ></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Empowering Halal Services
        </h1>
        <p class="text-lg sm:text-xl text-primary-100 mb-8">
          Amanahmu connects you with trusted, professional, and Sharia-compliant service providers
          for your every need.
        </p>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="py-16 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            To create a trustworthy ecosystem where customers can find reliable services and
            professionals can grow their business with integrity. We believe in transparency,
            quality, and the values of Amanah (Trust).
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <div
                class="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p class="ml-3 text-gray-600">Verified Providers</p>
            </li>
            <li class="flex items-start">
              <div
                class="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p class="ml-3 text-gray-600">Secure Transactions</p>
            </li>
            <li class="flex items-start">
              <div
                class="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p class="ml-3 text-gray-600">Sharia Compliant Principles</p>
            </li>
          </ul>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Team working"
            class="rounded-2xl shadow-xl"
          />
          <div
            class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block"
          >
            <p class="text-4xl font-bold text-primary-600 mb-1">5k+</p>
            <p class="text-gray-500 font-medium">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Values Grid -->
    <div class="bg-gray-50 py-16 px-6 sm:px-12 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">Why Choose Amanahmu?</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Trusted & Secure</h3>
            <p class="text-gray-600">
              Every provider is vetted. Every transaction is secured. Your peace of mind is our
              priority.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div
              class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">On Time, Every Time</h3>
            <p class="text-gray-600">
              We value your time. Our professionals are committed to punctuality and efficiency.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p class="text-gray-600">
              Got a question or issue? Our dedicated support team is ready to assist you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
