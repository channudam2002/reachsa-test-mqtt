<template>
  <div class="w-screen h-screen p-10 flex flex-col space-y-5">
    <div class="flex flex-row items-center w-full space-x-3">
      <div>
        <p class="text-4xl font-bold">MQTT Tester</p>
      </div>
      <div class="flex flex-1 items-center space-x-3 justify-end">
        <div class="flex flex-col items-end drop-shadow-2xl">
          <p class="text-4xl font-bold text-gray-700">Reachsa.io</p>
          <p class="py-1 px-3 rounded-md bg-gray-700 text-white text-sm">
            Test Platform
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col space-y-3 p-3 px-6 rounded-lg shadow-md items-start"
    >
      <p class="text-xl font-bold">Connect MQTT Server</p>
      <hr class="w-full" />
      <form @submit.prevent="connectClient" class="grid grid-cols-7 gap-3">
        <div class="relative">
          <input
            type="text"
            required
            v-model="protocol"
            id="protocol"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="protocol"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Protocol</label
          >
        </div>
        <div class="relative">
          <input
            type="text"
            required
            v-model="host"
            id="host"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="host"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Host</label
          >
        </div>
        <div class="relative">
          <input
            type="text"
            required
            v-model="port"
            id="port"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="port"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Port</label
          >
        </div>
        <div class="relative">
          <input
            type="text"
            required
            autocomplete="additional-name"
            v-model="username"
            id="username"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="username"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Username</label
          >
        </div>
        <div class="relative">
          <input
            autocomplete="new-password"
            type="password"
            required
            v-model="password"
            id="password"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="password"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >password</label
          >
        </div>
        <div class="relative">
          <button
            type="submit"
            class="w-full bg-gray-700 text-white rounded-md p-3"
          >
            Connect
          </button>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-col items-start">
            <p class="text-xs">Connection Status</p>
            <div
              v-if="socketStore.mqttConnectionStatus == 0"
              class="flex items-center space-x-3 max-w-max rounded-md text-red-500"
            >
              <p class="text-xl font-bold">Not Connected</p>
              <span class="material-symbols-outlined"> adjust </span>
            </div>
            <div
              v-if="socketStore.mqttConnectionStatus == 1"
              class="flex items-center space-x-3 max-w-max rounded-md animate-pulse text-orange-500"
            >
              <p class="text-xl font-bold">Connecting</p>
              <span class="material-symbols-outlined"> adjust </span>
            </div>
            <div
              v-if="socketStore.mqttConnectionStatus == 2"
              class="flex items-center space-x-3 max-w-max rounded-md text-green-500"
            >
              <p class="text-xl font-bold">Connected</p>
              <span class="material-symbols-outlined"> adjust </span>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="w-full grid grid-cols-2 gap-3">
      <div
        class="flex flex-col space-y-3 p-3 px-6 rounded-lg shadow-md items-start"
      >
        <p class="text-xl font-bold">Publish Message</p>
        <hr class="w-full" />
        <div class="grid grid-cols-5 gap-3 w-full">
          <div class="relative col-span-3">
            <input
              type="text"
              id="pubTopic"
              v-model="pubTopic"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="pubTopic"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Topic</label
            >
          </div>
          <div class="relative col-span-1">
            <select
              v-model="mode"
              class="border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Mode</option>
              <option value="loop" selected>Iteration</option>
              <option value="once">Once</option>
            </select>
          </div>
          <div class="relative col-span-1">
            <select
              v-if="mode == 'loop'"
              v-model="time"
              class="border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Time</option>
              <option value="1">Once per 1s</option>
              <option value="2">Once per 2s</option>
              <option value="3">Once per 3s</option>
              <option value="4">Once per 4s</option>
              <option value="5">Once per 5s</option>
            </select>
            <div v-else class="bg-gray-200 rounded-md w-full h-full"></div>
          </div>
          <div class="relative col-span-4">
            <input
              type="text"
              id="payload"
              v-model="payload"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="payload"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Payload</label
            >
          </div>
          <div>
            <button class="text-white bg-blue-500 p-3 rounded-md w-full">
              Publish
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col space-y-3 p-3 px-6 rounded-lg shadow-md items-start"
      >
        <p class="text-xl font-bold">Subscribe Message</p>
        <hr class="w-full" />
        <div class="w-full grid grid-cols-5 gap-3">
          <div class="relative col-span-4">
            <input
              type="text"
              id="subTopic"
              v-model="subTopic"
              class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="subTopic"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >Topic</label
            >
          </div>
          <div>
            <button
              v-if="!isSubscribe"
              @click="subscribe"
              class="text-white bg-green-500 p-3 rounded-md w-full"
            >
              Subscribe
            </button>
            <button
              v-if="isSubscribe"
              @click="unsubscribe"
              class="text-white bg-yellow-500 p-3 rounded-md w-full"
            >
              Cancel
            </button>
          </div>
          <div
            class="relative text-white col-span-5 bg-neutral-700 p-3 rounded-md w-full h-96 flex flex-col space-y-2 text-start overflow-y-scroll scroll-auto"
          >
            <div class="flex flex-col space-y-2 sticky top-0 left-0">
              <p class="text-white">Subscribed Topic and Payload</p>
              <hr />
              <div
                v-if="subscribedData"
                v-for="(subscribeData, index) in subscribedData"
              >
                <p>
                  Topic:
                  <span class="text-yellow-300">{{ subscribeData.topic }}</span>
                  - Payload:
                  <span class="text-cyan-300">{{ subscribeData.payload }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSocketStore } from "./stores/SocketStore";
export default {
  setup() {
    const socketStore = useSocketStore();
    return {
      socketStore,
    };
  },
  name: "App",
  data() {
    return {
      port: undefined,
      host: undefined,
      protocol: undefined,
      username: undefined,
      password: undefined,

      pubTopic: undefined,
      payload: undefined,
      mode: "",
      time: "",

      subscribedData: [],

      subTopic: undefined,

      isSubscribe: false,
    };
  },
  components: {},
  mounted() {
    document.title = "Reachsa.io | MQTT Tester";
  },
  methods: {
    connectClient() {
      this.socketStore.connectSocket("https://websocket.reachsa.digital");
      // this.socketStore.connectSocket("http://localhost:3000");
      this.socketStore.client.on("connect", () => {
        this.socketStore.client.emit(
          "connectMqtt",
          this.host,
          this.port,
          this.protocol,
          this.username,
          this.password,
          false
        );
      });
    },
    subscribe() {
      this.isSubscribe = true;
      this.socketStore.subscribe(this.subTopic);
      this.socketStore.$subscribe((mutation, state) => {
        this.subscribedData.push({
          topic: state.topic,
          payload: state.message
        })
      });
    },
    unsubscribe() {
      this.isSubscribe = false;
      this.socketStore.unsubscribe(this.subTopic);
    },
  },
};
</script>

<style>
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
