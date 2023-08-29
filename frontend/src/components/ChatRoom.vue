<template>
    <div>
        <p>Chat room</p>
      <div v-for="message in messages" :key="message.id">
        {{ message.sender }}: {{ message.text }}
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" />
    </div>
  </template>
  
  <script>
  import io from 'socket.io-client';
  
  export default {
    data() {
      return {
        messages: [],
        newMessage: '',
      };
    },
    created() {
      this.socket = io('http://localhost:3000');
      this.socket.on('message', message => {
        this.messages.push(message);
      });
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.socket.emit('message', { text: this.newMessage });
          this.newMessage = '';
        }
      },
    },
  };
  </script>
  
  