import { RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import BeerComponent from '../components/BeerComponent.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/beers/:id',
    name: 'Beers',
    component: BeerComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;