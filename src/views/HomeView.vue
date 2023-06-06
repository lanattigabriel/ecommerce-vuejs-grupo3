<script lang="ts">
import {
  IonPage, 
  IonContent,
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { defineComponent, ref } from 'vue';

export default defineComponent ({
  components: {
    IonPage, 
    IonContent,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
  },
  data() {
      return {
        message: '',
      };
    },
    methods: {
      cancel() {
        this.$refs.modal.$el.dismiss(null, 'cancel');
      },
      confirm() {
        const name = this.$refs.input.$el.value;
        this.$refs.modal.$el.dismiss(name, 'confirm');
      },
      onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
          this.message = `Hello, ${ev.detail.data}!`;
        }
      },
    },
});
</script>

<template>
  <ion-page>
     <ion-toolbar style="text-align:center">
      <h1>E-Commerce Centennials</h1>
    </ion-toolbar>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block" style="align-item:center">Enter your Name</ion-button>
      <p style="text-align:center">{{ message }}</p>
      <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Welcome</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-label position="stacked">Enter your name</ion-label>
            <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
