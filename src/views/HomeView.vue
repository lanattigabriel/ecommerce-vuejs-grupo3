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
  IonCol,
  IonGrid,
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
    IonCol,
    IonGrid,
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
    <!-- Content de Home -->
    <ion-content class="ion-padding">
    <!-- Titulo de Home -->
     <ion-toolbar style="text-align:center">
      <h1>E-Commerce Centennials</h1>
    </ion-toolbar>
    <!-- Nombre de usuario de Home -->
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

      <!-- Informacion del E-Commerce -->
      <!-- Linea Separacion de Home -->
      <ion-item></ion-item>
      <ion-toolbar style="text-align:center">
        <h3>Nosotros</h3>
      </ion-toolbar>
      <!-- <ion-button expand="block" @click="scrollToBottom()">Scroll to Bottom</ion-button> -->
      <!-- Descripcion de Home -->
      <p>
        Nulla tristique ultricies suscipit. Donec non ornare elit. Vivamus id pretium mauris, nec sagittis leo. Fusce
        mattis eget est id sollicitudin. Suspendisse dictum sem magna, in imperdiet metus suscipit et. Suspendisse enim
        enim, venenatis et orci eu, suscipit congue lacus. Praesent vel ligula non eros tempor interdum. Proin justo orci,
        ultricies vitae diam sed, semper consectetur ligula. Aenean finibus ante velit, nec efficitur libero cursus
        cursus. Duis mi nunc, imperdiet sed condimentum vel, porttitor ut lacus. Quisque dui ipsum, vehicula sed
        vestibulum id, semper vel libero. Suspendisse tincidunt mollis condimentum. Nulla facilisi. Etiam neque nisl,
        egestas nec iaculis sed, tristique faucibus sem. Sed mollis dui quis ligula cursus rutrum.
      </p>

      <!-- Linea Separacion de Home -->
      <ion-item></ion-item>
      <ion-toolbar style="text-align:center">
        <h3>Productos</h3>
      </ion-toolbar>
      <!-- Grid Productos de Home -->
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col>
             <ion-card>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <ion-card-header>
              <ion-card-title>Pants</ion-card-title>
              <ion-card-subtitle>Product</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
          </ion-col>
          <ion-col>
             <ion-card>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <ion-card-header>
              <ion-card-title>Shirts</ion-card-title>
              <ion-card-subtitle>Product</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
            </ion-card-content>
          </ion-card>
          </ion-col>
          <ion-col>
             <ion-card>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
                <ion-card-title>Shoes</ion-card-title>
                <ion-card-subtitle>Product</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

   
      <!-- <ion-button expand="block" @click="scrollToTop()">Scroll to Top</ion-button> -->
    </ion-content>
  </ion-page>
</template>

<style>
  ion-col {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  ion-card-subtitle {
    color:blue;
  }
</style>
