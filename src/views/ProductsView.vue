<template>
  <ion-page>
    <h1>Here are our products.</h1>
    <ion-content>
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/1"
        >Pants</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/2"
        >Shirts</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/3"
        >Shoes</ion-button
      >
      <ion-grid>
        <ion-row>
          <ion-col v-for="e in products" :key="e.id">
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
                {{e.description}}
              </ion-card-content>
              <ion-button @click='chooseProduct(e)'>Add To Cart</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
  import configServices from '../services/configServices';
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
      products: [],
      product: {
        id: '',
        name: '', 
        category: '',
        description: ''
      },
    };
  },
  async mounted(){
    this.loadList();
  },
  methods: {
    chooseProduct(product) {
      this.addToCart(product);
      alert(`${product.name} added to cart`);
      this.counter++;
    },
    async loadList(){
      try{
        this.products = await configServices.loadProducts();
      } catch(error){
        console.log(error);
      }
    },
  },
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