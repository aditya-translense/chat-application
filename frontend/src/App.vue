<template>
  <div class="chat">
    <!-- <div v-if="!joined">
    <p>Login scree</p>
    <form  @submit.prevent="joinChat">
      <label for="">Enter your name</label>
      <input type="text" v-model="name">
      <button type="submit">Enter</button>
    </form>
    </div>
     <div class="chat-container" v-else>
      <div class="message-container">
        <div v-for="message in messages" :key="message">
          {{ message }}
        </div>
      </div>
      <div v-if="typingDisplay">{{ typingDisplay }}</div>
      <hr />
      <div class="message-input">
        <form @submit.prevent="sendMessage">
          <label for="message"></label>
          <input type="text" v-model="messageText" @input="emitTyping">
          <button type="submit">Send</button>
        </form>
      </div>
     </div> -->
     <router-view></router-view>
     <!-- <MainPage></MainPage> -->
  </div>
</template>

<script>
/* eslint-disable */
import {io} from 'socket.io-client'
const socket=io("http://localhost:3000")
import MainPage from './components/MainPage.vue'
export default {
    components: [MainPage],
    name: 'App',
    data() {
        return {
        //  messages:[],
        //  messageText:'',
        //  joined:false,
        //  name:'',
        //  typingDisplay:'',
        //  timeout:null
        };
    },
    //  onBeforeMount(){
    //    socket.emit('findAllMessages',(response)=>{
    //     this.messages.values=response
    //    })
    //  },
    methods: {
    // sendMessage(){
    //   console.log(this.messageText)
    //   socket.emit('createMessage',{name:this.name,message:this.messageText},()=>{
    //      this.messageText=''
    //   })
    //   socket.emit('findAllMessages',{},()=>{})
    //   console.log(this.messages)
    // },
    // joinChat(){
    //   socket.emit('join',{name:this.name},(res)=>{
    //     console.log("responese",res)
    //     this.joined=true
    //   })
    // },
    // emitTyping(){
    //   socket.emit('typing',{isTyping:true})
    //   this.timeout=setTimeout(()=>{
    //     socket.emit('typing',{isTyping:false})
    //   },1000)
    // }
    },
    beforeMount() {
        // socket.emit('findAllMessages',{},(response)=>{
        //   console.log("finding mesage")
        //   console.log("response",response)
        //   this.messages=response
        // })
        // socket.on('message',(message)=>{
        //   console.log('message recieved')
        //  this.messages.push(message)
        //  console.log("new message",this.messages)
        // })
        // socket.on('typing',({name,isTyping})=>{
        //   if(isTyping){
        //     this.typingDisplay=`${name} is typing...`
        //   }
        //   else{
        //     this.typingDisplay='';
        //   }
        // })
    },
    components: { MainPage }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

}
.project-heading{
 text-align: center;
 background-color: antiquewhite;
}

.chat{
  padding:20px;
  height:100vh
}

.chat-container{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.message-container{
  flex:1
}
</style>
