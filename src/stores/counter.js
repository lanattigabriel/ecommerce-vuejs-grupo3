import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Setea el count, que es el unico que usamos, en 0 para despueste devolverlo para usarlo
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
