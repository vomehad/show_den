import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KinsmanListView from '../views/KinsmanListView.vue';
import KinsmanView from '../views/KinsmanView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/kinsmans',
      name: 'kinsmans',
      component: KinsmanListView
    },
    {
      path: '/show/:id',
      name: 'kinsman',
      component: KinsmanView
    }
  ]
})

export default router
