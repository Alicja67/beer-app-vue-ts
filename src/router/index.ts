import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
  ],
})