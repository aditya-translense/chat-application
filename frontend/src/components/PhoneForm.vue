<template>
  <div class="phone-number-input">
    <label for="phone">Phone Number:</label>
    <input
      type="tel"
      id="phone"
      v-model="phoneNumber"
      @input="formatPhoneNumber"
      placeholder="Enter phone number"
    />
    <button @click="submitForm">Submit</button>
    <div class="errMessage" v-if="errStatus">{{err}}</div>
  </div>
</template>

<script>
import axios from '../axios';
export default {
  name: 'PhoneNumberInput',
 
  data() {
    return {
      phoneNumber: '',
      err:"invalid message",
      errStatus:false
    };
  },
  methods: {
    formatPhoneNumber() {
      // Implement phone number formatting logic here if needed
    },
    async submitForm(){
      console.log(this.phoneNumber)
      if(this.countDigits(this.phoneNumber)){
        console.log("valid number")
        try {
          let postData={
            phoneNumber:this.phoneNumber
          }
          const reponse=await axios.post('/api',postData)
          console.log('response',reponse.data)
          this.$router.push('/chatroom')
        } catch (error) {
           console.log(error)
        }
      }
      else{
        console.log("invalid number")
      }
    },
    countDigits(number) {
    let  digits= String(number).length;
      if(digits<10 | digits>10){
        this.errStatus=true;
        return false;
      }
      this.errStatus=false;
      return true;
     }
  },
}
</script>


<style scoped>
.phone-number-input {
  margin-bottom: 1rem;
  border:2px solid black;
}
</style>


