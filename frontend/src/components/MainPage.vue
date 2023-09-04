<template>
    <div>
        <h2>Welcome to the chat platform</h2>
        <p>Existing user? <span @click="alternate('login')">Login</span></p>
        <p>Else <span @click="alternate('signup')">Signup</span></p>
        <div class="signup" v-if="singup">
        <form  @submit.prevent="signup">
            <p>
            <label for="">Enter name</label>
            <input type="text" name="" id="" v-model="name">
             </p>
             <p>
            <label for="">Enter phone number</label>
            <input type="text" v-model="number">
            </p>
            <button type="submit">Submit</button>
        
        </form>
    </div>

    <div class="login" v-if="login">
        <form  @submit.prevent="loginForm">
        
             <p>
            <label for="">Enter phone number</label>
            <input type="text" v-model="login_number">
            </p>
            <button type="submit">Submit</button>
        
        </form>
    </div>

    
    </div>
</template>

<script>
// import axios from 'axios';
import instance from '../axios';
import Cookies from 'js-cookie'
  export default{
    data(){
        return{
          login:false,
          singup:false,
          name:"",
          number:"",
          login_number:""
        }
    },
    methods:{
        async loginForm(){
           let currNumber=parseInt(this.login_number,10)
           let data={p_number:currNumber};
           let resp=await instance.post('/users/login',data)
           console.log("inside login")
           console.log(resp);
           Cookies.set('token',resp.data.token)
           Cookies.set('name',resp.data.name)
           this.$router.push('/chatroom')
        },
       alternate(tab){
        console.log("in alternate")
        if(tab=='signup'){
            this.singup=true;
        }
        else{
            this.login=true;
        }
       },
       async signup(){
         if(this.name==="" || this.number===""){
            console.log("empty data not accepted")
         }
         let currNumber=parseInt(this.number,10);
         let data={name:this.name,p_number:currNumber};
         let res=await instance.post("/users/signup",data)
         Cookies.set('token',res.data.token,{expires:5/(24*60)})
         Cookies.set('name',res.data.name)
         this.$router.push('/chatroom')
       },
      
    }
  }
</script>