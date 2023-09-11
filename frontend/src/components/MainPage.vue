<template>
    <div>
        <h2>Welcome to the chat platform</h2>
        <p>Existing user? <span @click="alternate('login')">Login</span></p>
        <p>Else <span @click="alternate('signup')">Signup</span></p>
        <div class="wrapper">
        <div class="signup-form" v-if="singup">
          <p class="form-heading">Sign-Up</p>
        <form  @submit.prevent="signup">
            <p>
            <label for="">Enter name</label>
            <input class="input-field" type="text" name="" id="" v-model="name">
             </p>
             <p>
            <label for="">Enter phone number</label>
            <input class="input-field"  type="text" v-model="number">
            </p>
            <button class="submit-button" type="submit">Submit</button>
        
        </form>
    </div>

    <div class="signup-form" v-if="login">
      <p class="form-heading">Login</p>
        <form  @submit.prevent="loginForm">
        
             <p>
            <label for="">Enter phone number</label>
            <input class="input-field" type="text" v-model="login_number">
            </p>
            <button class="submit-button" type="submit">Submit</button>
        
        </form>
    </div>
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

<style scoped>
span{

  color:blue;
  cursor: pointer;
  border-bottom: 1px solid blue;
}

.wrapper{
 
}


.signup-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Style for form headings (e.g., "Sign Up") */
.form-heading {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Style for input fields */
.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

/* Style for the submit button */
.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF; /* Change the color to your preference */
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
}

/* Style for the submit button on hover */
.submit-button:hover {
  background-color: #0056b3; /* Change the color to your preference */
}
</style>