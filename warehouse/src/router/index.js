import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import Productlist from '../views/Productlist.vue'
import Createproduct from '../components/Createproduct.vue'
import TransectionVue from '../views/Transection.vue'
import DashBoardView from '../views/DashBoard.vue'
import Productaccount from '../views/Productaccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Homeview',
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
    },
    {
      path: '/Createproduct',
      name: 'Createproduct',
      component: Createproduct
    },
    {
      path: '/Transection',
      name: 'Transection',
      component: TransectionVue
    },
    {
      path:'/Board',
      name: 'DashBoardView',
      component: DashBoardView
    },
    {
      path: '/productaccount/:id',
      name: 'Productaccount',
      component: Productaccount
    }
    
  ]
})

export default router
