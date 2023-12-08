import { defineStore } from "pinia";
import { io } from "socket.io-client";

export const useSocketStore = defineStore("socketStore", {
  state: () => {
    return {
      client: undefined,
      mqttConnectionStatus: 0,
      topic: undefined,
      message: undefined,
    };
  },
  actions: {
    connectSocket(url) {
      this.client = io(url);
      this.client.on("connect", () => {
        this.mqttConnectionStatus = 1;
      });
      this.client.on("mqtt_connected", () => {
        this.mqttConnectionStatus = 2;
      });
      this.client.on("mqtt_error", () => {
        this.mqttConnectionStatus = 0;
      });
      this.client.on("connect_error", (error) => {
        this.mqttConnectionStatus = 0;
      });
      this.client.on("mqtt_message", (topic, message) => {
        this.topic = topic;
        this.message = message;
      });
    },
    publish(topic, message) {
      this.client.emit("publish", topic, message, this.client.id);
    },
    subscribe(topic) {
      this.client.emit("subscribe", topic);
    },
    unsubscribe(topic) {
      this.client.emit("unsubscribe", topic);
    },
  },
});
