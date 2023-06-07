<!--
<template>
  <ion-page>
    <h1>Are you sure you want to logout?</h1>
    <ion-content>
      <ion-button id="present-alert">Logout</ion-button>
      <ion-alert trigger="present-alert" class="custom-alert" header="Are you user?" :buttons="alertButtons"></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonAlert, IonPage, IonContent, IonButton} from '@ionic/vue'
import {useLoginStore} from '../stores/login.js'
export default {
components: {IonAlert, IonPage, IonContent, IonButton},
setup() {
  const store = useLoginStore()
  const { logout } = store
  return { logout }
},
setup(){
  const alertButtons = [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
  ];

  return { alertButtons };
},
data(){
  return{
    user: {email: '', password: ''}
  }
},
methods: {
  log() {
      if(this.alertButtons.text == 'Yes'){
        this.logout()
        this.$router.push('/')
      }
    }
  }
}

</script>

<style>
</style>
-->
<template>
  <ion-page>
    <h1>Are you sure you want to logout?</h1>
    <ion-content>
      <ion-button @click="presentAlert">Logout</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { useLoginStore } from '../stores/login.js'
import { alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
  components: { IonPage, IonContent, IonButton },
  setup() {
    const store = useLoginStore()
    const { logout } = store
    const router = useRouter();

    const presentAlert = async () => {
      const alert = await alertController.create({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'alert-button-cancel',
            handler: () => {
              alert.dismiss();
            }
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
            handler: () => {
              alert.dismiss();
              log();
            }
          }
        ]
      });

      await alert.present();
    };

    const log = () => {
      logout();
      router.push('/');
    };

    return { presentAlert };
  }
};
</script>

<style>
</style>





