import { defineStore } from 'pinia'
export const useCartStore = defineStore('cart', {
    state: () => {
        return { counter: 0, productsInCart: []}
    },
    actions: {
        addToCart(product) {
            this.productsInCart.push(product)
        },
        removeFromCart(product) {
            this.productsInCart.pop(product)
        }
    },
})
