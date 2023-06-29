<template>
  <ion-page>
    <h1>Enter your email address and password:</h1>
    <ion-content>
      <ion-input v-model='user.email' label='email' type='email'></ion-input>
      <ion-input v-model='user.password' label='password' type='password'></ion-input>
      <ion-button @click='log'>Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonInput, IonButton} from '@ionic/vue'
import {useLoginStore} from '../stores/login.js'
import configServices from '../services/configServices';
export default {
components: {IonPage, IonContent, IonInput, IonButton},
setup() {
  const store = useLoginStore()
  const { login } = store
  return { login }
},
data(){
  return{
    user: {email: '', password: ''}
  }
},
methods: {
  async log() {
    try {
      
    
    const user_log = await configServices.loginUser(this.user)

    if(user_log != null) {
      if (user_log.role == "admin") {
        this.login({email: this.user.email, permissions: ["editProducts", "editProduct"]})
        this.$router.push('/editProducts')
        
      } else {
        
        this.login({email: this.user.email, permissions: ["buyProducts"]})
        this.$router.push('/products')
      }
    }
  } catch (error) {
    
    alert('Incorrect email or password')
  
    }

    // if(this.user.email == 'admin@admin.com' && this.user.password == '1111') {
    //   this.login({email: this.user.email, permissions: ["editProducts", "editProduct"]})
    //   // this.usuario = {email: '', password: ''}
    //   this.$router.push('/editProducts')
    // } else if(this.user.email == 'test@test.com' && this.user.password == '1234') {
    //   this.login({email: this.user.email, permissions: ["buyProducts"]})
    //   // this.usuario = {email: '', password: ''}
    //   this.$router.push('/products')
    // } else {
    //   alert('Incorrect email or password')
    // }
  }
}
}
</script>

<style>

</style>