<template>
  <ion-page>
    <h1>Add Product View.</h1>
    <ion-content>
          <ion-input 
              label="Id" label-placement="stacked" v-model="product.id"></ion-input>
          <ion-input 
              label="Type" label-placement="stacked" v-model="product.tipo"></ion-input>
          <ion-input 
              label="Waist" label-placement="stacked" v-model="product.talle"></ion-input>
          <ion-input 
              label="Color" label-placement="stacked" v-model="product.color"></ion-input>
          <ion-input 
              label="Stock" label-placement="stacked" v-model="product.stock"></ion-input>
          <ion-input 
              label="Image" label-placement="stacked" v-model="product.imagen"></ion-input>
          <ion-button @click="addProduct"> ADD TO PRODUCTS </ion-button>
      </ion-content>
  </ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonButton,
  } from '@ionic/vue'
export default {
  components: { 
    IonPage,
    IonContent,
    IonButton,
  },
  data() {
    return {
      product: {}
    }
  },
}
</script>
        
<style>

</style>
