<template>
    <ion-page>
      <h1>Edit Product {{ product.id }}</h1>
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
        <ion-button @click="editProduct()"> EDIT </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router';
  import configServices from '../services/configServices';
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
        product: {
            id: '',
            name: '', 
            category: '',
            description: ''
        },
      };
    },
   mounted() {
    this.getProductFromState();
    },
    methods: {
      getProductFromState() {
        const { product } = this.$route.query;
        if (product) {
          this.product = JSON.parse(product);
        }
      },
      async editProduct() {
        try {
          await configServices.updateProduct(this.product.id, this.product);
          alert("Product edited correctly");
          this.$router.push('/editProducts');
        } catch (e) {
          console.log(e);
          alert("Error editing product");
        }
      },
    },
  };
  </script>
          
  <style>
  </style>
        <!--
      getProductFromState() {
        this.product  = this.$route.state || {};
        if (this.product) {
          alert('Error the product is empty');
        }
      },
        -->