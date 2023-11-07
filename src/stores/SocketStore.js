import { defineStore } from 'pinia'
import {io} from 'socket.io-client'

export const useSocketStore = defineStore('socketStore', {
  state:()=>{
   return {
    client: undefined,
    _topic: undefined,
    _message: undefined,
    _socketId: undefined,
   }
  },
  actions:{
    connectSocket(url){
        this.client = io(url);
        // this.client.on('connect', ()=>{
        //   this.client.on('message', (_topic, _message, _socketId)=>{
        //     this._topic = _topic;
        //     this._message = _message;
        //     this._socketId = _socketId;
        //   });
        // })
    },
    publish(topic, message){
      this.client.emit('publish', topic, message);
    },
    subscribe(topic){
      this.client.emit('subscribe', topic);
    },
    unsubscribe(topic){
        this.client.emit('unsubscribe', topic);
    }
  },
  
})