<template>
  <ion-page>
    <h1>Are you sure you want to logout?</h1>
    <ion-content>
      <ion-button @click='log'>Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent, IonButton} from '@ionic/vue'
import {useLoginStore} from '../stores/login.js'
export default {
components: {IonPage, IonContent, IonButton},
setup() {
  const store = useLoginStore()
  const { logout } = store
  return { logout }
},
data(){
  return{
    user: {email: '', password: ''}
  }
},
methods: {
  log() {
      this.logout()
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>