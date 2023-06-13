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
          <ion-col v-for="e in products" :key="e.name">
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
              <ion-button @click="editProduct(e.id)">Edit</ion-button>
              <ion-button @click='deleteProduct(e.id)'>Delete</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

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
import { RouterLink, RouterView } from 'vue-router'
import configServices from '../services/configServices';
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
  data() {
    return {
      products: [],
      product: {
        name: '', 
        category: '',
        description: ''
      },
    };
  },
  async mounted(){
    this.loadProducts();
  },
  watch: {
    '$route.params.id': function(newId) {
      if(newId){
        this.filteredProducts = this.products.filter(product => product.category === newId)
      } else {
        this.filteredProducts = {...this.products}
      }
    }
  },
  methods: {
    async editProduct(id) {
      try {
        this.product = await configServices.getProductById(id);
        console.log(this.product);
        // { path: `/editProduct`, state: { product: this.product } }
        this.$router.push({ path: `/editProduct`, query: { product: JSON.stringify(this.product) } });
        this.product = {
          name: '', 
          category: '',
          description: ''
        };
      } catch (e) {
        console.log(e);
      }
    },
    async loadProducts(){
      try{
        this.products = await configServices.loadProducts();
      } catch(e){
        console.log(e);
      }
    },
    async deleteProduct(id) {
      try{
        await configServices.deleteProduct(id);
        await this.loadProducts();
        alert(`Product delete from products`)
      }catch(e) {
        console.log(e);
        alert(`The delete was imposible`)
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