<template>
    <div class="chat-wrapper">
        <p>Chat room</p>
        <p>Welcome {{ userName }},Type your messages here</p>
      <div v-for="message in messages" :key="message.id">
        {{ message.name }}: {{ message.message }}
      </div>
      <input class="input-box" v-model="newMessage" placeholder="Enter your message"/>
      <button type="submit" @click="sendMessage" >Send me</button>
    </div>
  </template>
  
  <script>
  import {io} from 'socket.io-client';
  import Cookies from 'js-cookie'
  const socket=io("http://localhost:3000")
  export default {

    data() {
      return {
        userName:'',
        messages: [{sender:"Aditya",text:"this is my message"}],
        newMessage: '',
      };
    },
     created() {
     
      // this.socket.on('message', (message) => {
      //   this.messages.push(message);
      // });
    },
    beforeMount(){
      console.log("socket",socket)
      //extract the name of current user from the cookies
      this.userName=Cookies.get('name')
      console.log("name is",this.userName)

      //listen to the incoming messages sent from the other users
      socket.on('message',(message)=>{
        console.log("listening to messages")
        console.log(message)
        this.messages.push(message)
      })

      //extract all the previous messages from the database

      socket.emit('findAllMessages',{},(response)=>{
        console.log("finding message before mounting")
        console.log("response",response)
        this.messages=response
      })

      
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          // this.socket.emit('message', { text: this.newMessage });
          // this.newMessage = '';
          socket.emit('createMessage',{name:this.userName,message:this.newMessage})
          console.log("message sent")
          this.newMessage=''
        }
      },
    },
  };
  </script>

  <style scoped>
   .chat-wrapper{
     background-color: rgb(211, 198, 184);
     padding:20px;
     padding-left: 40px;
     height: 70vh;
   }

   .input-box{
    margin-bottom: 0px;
    margin-top:55vh;
   }
  </style>
  
  