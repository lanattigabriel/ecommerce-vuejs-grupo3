import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import UnauthorizedView from '../views/UnauthorizedView.vue'
import AddProductView from '../views/AddProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import EditProductsView from '../views/EditProductsView.vue'
import CartView from '../views/CartView.vue'
import { useLoginStore } from '../stores/Login.js'

const router = createRouter({
  // Esto crea un objeto de historial de navegacion lo que permite una navegacion basada en la URL en una aplicacion web 
  // 'import.meta.env.BASE_URL' proporciona la URL base de la aplicación.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { RequireAuth: true }
    },
    {
      path: '/products/:id',
      name: 'productsID',
      component: ProductsView,
      meta: { RequireAuth:true }
    },
    {
      path: '/editProduct',
      name: 'editProduct',
      component: EditProductView,
      meta: { RequireAuth:true }
    },
    {
      path: '/editProducts',
      name: 'editProducts',
      component: EditProductsView,
      meta: { RequireAuth:true }
    },
    {
      path: '/editProducts/:id',
      name: 'editProductsID',
      component: EditProductsView,
      meta: { RequireAuth:true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProductView,
      meta: { RequireAuth:true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// es una condición que verifica si la ruta de destino (to) tiene una metaetiqueta (RequireAuth) y si el usuario 
// no ha iniciado sesión (store.isLogin es falso).
// Next('/unauthorized') redirige al usuario a la ruta /unauthorized si no cumple con los requisitos de autenticación.
router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && !store.isLogin) {
    next('/unauthorized')
    return
  }
  next()
  return
})

export default router
