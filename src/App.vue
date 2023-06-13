<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonContent, IonButton, IonItem } from "@ionic/vue";
import { storeToRefs } from 'pinia'
import { useLoginStore } from "./stores/login.js";
import { useCartStore } from './stores/cart.js';
export default {
  components: { IonApp, IonHeader, IonContent, IonButton, IonItem },
  setup() {
    // Login
    const loginStore = useLoginStore();
    const { isLogin, user } = storeToRefs(loginStore);
    const { hasPermission } = loginStore;
    // Cart
    const cartStore = useCartStore();
    const { productsInCart, counter } = storeToRefs(cartStore)

    return { isLogin, user, hasPermission, productsInCart, counter };
  }
};
</script>

<template>
  <ion-app>
    <ion-header>
      <ion-button fill="clear" router-link="/">Home</ion-button>
      <ion-button fill="clear" router-link="/about">About</ion-button>
      <ion-button v-if='isLogin && hasPermission("buyProducts")' fill="clear" router-link="/products">Products</ion-button>
      <ion-button v-if='isLogin && hasPermission("editProducts")' fill="clear" router-link="/editProducts">Edit Products</ion-button>
      <!--<ion-button v-if='isLogin && hasPermission("editProduct")' fill="clear" router-link="/editProduct">Edit Product</ion-button>-->
      <ion-button v-if='isLogin && hasPermission("editProducts")' fill="clear" router-link="/addProduct">Add Product</ion-button>
      <ion-button v-if='!isLogin' fill="clear" router-link="/login">Login</ion-button>
      <ion-button v-if='isLogin' fill="clear" router-link="/logout">Logout</ion-button>
      <ion-button v-if='isLogin && hasPermission("buyProducts")' fill="clear" router-link="/cart">Cart {{counter}}</ion-button>
      <ion-item v-if='isLogin'>User: {{user.email}}</ion-item>
    </ion-header>
    <ion-content>
      <RouterView />
    </ion-content>
  </ion-app>
</template>

<style>
  
</style>
