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
  log() {
    if(this.user.email == 'test@test.com' && this.user.password == '1234') {
      this.login({email: this.user.email, permissions: []})
      this.usuario = {email: '', password: ''}
      this.$router.push('/products')
    } else if(this.user.email == 'admin@admin.com' && this.user.password == '1111') {
      this.login({email: this.user.email, permissions: ['addUser']})
      this.usuario = {email: '', password: ''}
      this.$router.push('/products')
    } else {
      alert('Incorrect email or password')
    }
  }
}
}
</script>

<style>

</style>