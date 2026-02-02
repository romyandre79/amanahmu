<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
  noPadding: true,
})

const activeChat = ref(1)
const showMobileChatList = ref(true)

const conversations = [
  {
    id: 1,
    name: 'Budi Santoso',
    message: 'Is tomorrow 10 AM okay?',
    time: '10:30 AM',
    unread: 2,
    avatar: 'https://ui-avatars.com/api/?name=Budi+S&background=random',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    message: 'Thanks for the great service!',
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://ui-avatars.com/api/?name=Siti+A&background=random',
  },
  {
    id: 3,
    name: 'Ahmad Dani',
    message: 'Can you fix AC leak too?',
    time: 'Yesterday',
    unread: 0,
    avatar: 'https://ui-avatars.com/api/?name=Ahmad+D&background=random',
  },
  {
    id: 4,
    name: 'Rina Wati',
    message: 'Address sent.',
    time: '2 days ago',
    unread: 0,
    avatar: 'https://ui-avatars.com/api/?name=Rina+W&background=random',
  },
  {
    id: 5,
    name: 'Joko Susilo',
    message: 'Oke sip.',
    time: '1 week ago',
    unread: 0,
    avatar: 'https://ui-avatars.com/api/?name=Joko+S&background=random',
  },
]

const messages = ref([
  {
    id: 1,
    sender: 'them',
    text: 'Hi, are you available for AC cleaning tomorrow?',
    time: '10:00 AM',
  },
  {
    id: 2,
    sender: 'me',
    text: 'Yes, I am available. What time works best for you?',
    time: '10:05 AM',
  },
  { id: 3, sender: 'them', text: 'Is tomorrow 10 AM okay?', time: '10:30 AM' },
])

const newMessage = ref('')

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'me',
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  })
  newMessage.value = ''
  scrollToBottom()
}

const chatContainer = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}

const selectChat = (id: number) => {
  activeChat.value = id
  showMobileChatList.value = false
  scrollToBottom()
}
</script>

<template>
  <div class="flex h-full bg-white relative">
    <!-- Chat List Sidebar -->
    <div
      class="w-full md:w-80 lg:w-96 border-r border-gray-200 flex flex-col absolute md:relative z-10 bg-white h-full transition-transform duration-300 transform"
      :class="showMobileChatList ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    >
      <!-- Header -->
      <div class="p-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <h2 class="font-bold text-gray-800 text-lg mb-4">Messages</h2>
        <div class="relative">
          <input
            type="text"
            placeholder="Search chats..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
          <svg
            class="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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

      <!-- Scrollable List -->
      <div class="flex-1 overflow-y-auto">
        <div
          v-for="chat in conversations"
          :key="chat.id"
          class="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
          :class="{ 'bg-primary-50 border-l-4 border-l-primary-600': activeChat === chat.id }"
          @click="selectChat(chat.id)"
        >
          <div class="flex gap-3">
            <div class="relative">
              <img :src="chat.avatar" class="w-12 h-12 rounded-full object-cover" />
              <div
                v-if="chat.unread > 0"
                class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-bold"
              >
                {{ chat.unread }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <h3
                  class="font-bold text-gray-900 truncate"
                  :class="{ 'text-primary-900': activeChat === chat.id }"
                >
                  {{ chat.name }}
                </h3>
                <span class="text-xs text-gray-500">{{ chat.time }}</span>
              </div>
              <p
                class="text-sm text-gray-500 truncate"
                :class="{ 'font-semibold text-gray-800': chat.unread > 0 }"
              >
                {{ chat.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col min-w-0 bg-gray-50 h-full w-full absolute md:relative">
      <!-- Chat Header -->
      <div
        class="h-16 px-4 border-b border-gray-200 flex items-center justify-between bg-white shadow-sm flex-shrink-0 z-20"
      >
        <div class="flex items-center gap-3">
          <button
            class="md:hidden mr-2 text-gray-500 hover:text-gray-700"
            @click="showMobileChatList = true"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <div class="relative">
            <img
              src="https://ui-avatars.com/api/?name=Budi+S&background=random"
              class="w-10 h-10 rounded-full border border-gray-200"
            />
            <div
              class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 leading-tight">Budi Santoso</h3>
            <span class="text-xs text-green-600 font-medium">Online</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            title="View Job Details"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </button>
          <button
            class="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages Feed -->
      <div
        ref="chatContainer"
        class="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 flex flex-col bg-[url('https://subtlepatterns.com/patterns/geometry.png')]"
      >
        <!-- Date Separator -->
        <div class="flex justify-center">
          <span
            class="text-[10px] font-bold text-gray-400 bg-gray-200 px-3 py-1 rounded-full uppercase tracking-wider"
            >Today, Oct 25</span
          >
        </div>

        <div
          v-for="msg in messages"
          :key="msg.id"
          class="flex w-full group"
          :class="msg.sender === 'me' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[75%] md:max-w-[60%] rounded-2xl px-5 py-3 shadow-sm relative transition-all hover:shadow-md"
            :class="
              msg.sender === 'me'
                ? 'bg-primary-600 text-white rounded-br-none'
                : 'bg-white text-gray-800 rounded-bl-none'
            "
          >
            <p class="text-[15px] leading-relaxed">{{ msg.text }}</p>
            <div
              class="text-[10px] mt-1 flex items-center justify-end gap-1 opacity-70"
              :class="msg.sender === 'me' ? 'text-primary-100' : 'text-gray-400'"
            >
              {{ msg.time }}
              <span v-if="msg.sender === 'me'">✓✓</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 bg-white border-t border-gray-200 flex-shrink-0">
        <form class="flex items-end gap-2 max-w-4xl mx-auto w-full" @submit.prevent="sendMessage">
          <button
            type="button"
            class="p-3 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <div
            class="flex-1 bg-gray-100 rounded-2xl flex items-center px-4 py-2 border border-transparent focus-within:border-primary-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100 transition-all"
          >
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type a message..."
              class="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-500 py-1"
            />
          </div>
          <button
            type="submit"
            class="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 shadow-md transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            :disabled="!newMessage.trim()"
          >
            <svg
              class="w-5 h-5 rotate-90 translate-x-[2px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for chat */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
