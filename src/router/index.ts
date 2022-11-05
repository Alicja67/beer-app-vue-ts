import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import BeerView from '@/views/BeerView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/beer/:id',
      name: 'Beers',
      component: BeerView,
    },
  ],
})