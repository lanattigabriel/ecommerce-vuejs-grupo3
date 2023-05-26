<template>
  <ion-page>
    <h1>Here are our products.</h1>
    <ion-content>
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/pants"
        >Pants</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/shirts"
        >Shirts</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/shoes"
        >Shoes</ion-button
      >
      <ion-grid>
        <ion-row>
          <ion-col v-for="e in filteredProducts" :key="e.name">
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
              <ion-button @click='chooseProduct(e.name)'>Add To Cart</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useCartStore } from '../stores/cart.js';
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
import { storeToRefs } from 'pinia';
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
    const { productsInCart, counter } = storeToRefs(cartStore)
    const { addToCart } = cartStore
    return { productsInCart, addToCart, counter };
  },
  data() {
    return {
      products: [
        { id: "shirts", name: "shirt1" },
        { id: "pants", name: "pant1" },
        { id: "shoes", name: "shoe1" },
        { id: "shoes", name: "shoe2" },
        { id: "shoes", name: "shoe3" },
      ],
      filteredProducts: [
        { id: "shirts", name: "shirt1" },
        { id: "pants", name: "pant1" },
        { id: "shoes", name: "shoe1" },
        { id: "shoes", name: "shoe2" },
        { id: "shoes", name: "shoe3" },
      ],
      id: this.$route.params.id
    };
  },
  watch: {
    '$route.params.id': function(newId) {
      if(newId){
        this.filteredProducts = this.products.filter(product => product.id === newId)
      } else {
        this.filteredProducts = {...this.products}
      }
    }
  },
  methods: {
    chooseProduct(productName) {
      this.addToCart(productName)
      alert(`${productName} added to cart`)
      this.counter++
    }
  }
};
</script>

<style>
.clothes-button {
  --border-radius: 7px;
}
ion-card{
  border-radius: 10px;
  max-width: 300px;
  min-width: 200px;
}
</style>