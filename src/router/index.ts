import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '../views/Homeview.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import SignOut from '../views/SignOut.vue';
import Admin from '../views/dashboard/Admin.vue';
import Profile from '../views/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signOut',
      name: 'signOut',
      component: SignOut,
    },
    {
      path: '/dashboard/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ],
});

export default router;
