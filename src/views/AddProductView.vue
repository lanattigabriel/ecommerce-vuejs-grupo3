<template>
  <ion-page>
    <h1>Add Product</h1>
    <ion-content>
      <!-- <ion-input 
              label="Id" label-placement="stacked" v-model="product.id"></ion-input> -->
      <ion-input
        label="Name"
        label-placement="stacked"
        v-model="product.name"
      ></ion-input>
      <ion-input
        label="Category"
        label-placement="stacked"
        v-model="product.category"
      ></ion-input>
      <ion-input
        label="Description"
        label-placement="stacked"
        v-model="product.description"
      ></ion-input>
      <!-- <ion-input 
              label="Stock" label-placement="stacked" v-model="product.stock"></ion-input>
          <ion-input 
              label="Image" label-placement="stacked" v-model="product.imagen"></ion-input> -->
      <ion-button @click="addProduct"> ADD TO PRODUCTS </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import { IonPage, IonContent, IonButton, IonInput } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonInput,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async addProduct() {
      try {
        const newProduct = { ...this.product };
        await axios.post(
          "https://6483cc78ee799e3216261ce6.mockapi.io/products",
          newProduct
        );
        console.log(newProduct);
        this.product = {}
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
        
<style>
</style>
