import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import Productlist from '../views/Productlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name:'Login',
      component: LoginView
    },
    {
      path: '/Productlist',
      name: 'Productlist',
      component: Productlist
    }
    
  ]
})

export default router
