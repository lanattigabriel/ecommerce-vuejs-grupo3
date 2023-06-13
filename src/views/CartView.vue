<template>
  <ion-page>
    <h1>Cart View</h1>
    <ion-content>
      <p v-if='this.counter==0'>No products in the cart yet.</p>
      <ion-grid>
        <ion-row>
          <ion-col v-for="e in productsInCart" :key="e.name">
            <ion-card>
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
              <ion-card-header>
                <ion-card-title>{{ e.name }}</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
              <ion-button @click="removeProduct(e)">
                Remove From Cart</ion-button
              >
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style>
</style>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { storeToRefs } from 'pinia'
import { useCartStore } from "../stores/cart.js";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    // Cart
    const cartStore = useCartStore();
    const { productsInCart, counter } = storeToRefs(cartStore);
    const { removeFromCart } = cartStore;
    return { removeFromCart, productsInCart, counter };
  },
  methods: {
    removeProduct(productName) {
      this.removeFromCart(productName);
      this.counter--;
    }
  }
};
</script>
