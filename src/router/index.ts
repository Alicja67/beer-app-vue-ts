import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import BeerView from '@/views/BeerView.vue';
import PageNotFound from '@/views/PageNotFound.vue';

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
      // beforeEnter: (to, _, next) => {
      //   const { id } = to.params;

      //   if(Array.isArray(id)) {
      //     next({path: '/error'})
      //     return
      //   }
      // }
    },
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
