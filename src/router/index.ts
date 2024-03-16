import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '../views/Homeview.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import SignOut from '../views/SignOut.vue';
import Admin from '../views/dashboard/Admin.vue';
import Profile from '../views/Profile.vue';
import EntryPage from '../views/EntryPage.vue';
import RegisterCompanies from '../views/RegisterCompanies.vue';
import LoginCompanies from '../views/LoginCompanies.vue';
import SaveProducts from '../views/SaveProducts.vue';
import SelectedProduct from '../views/SelectedProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entryPage',
      component: EntryPage,
    },
    {
      path: '/home',
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
      path: '/save_products',
      name: 'save_products',
      component: SaveProducts,
    },
    {
      path: '/register_companies',
      name: 'register_companies',
      component: RegisterCompanies,
    },
    {
      path: '/login_companies',
      name: 'login_companies',
      component: LoginCompanies,
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
    {
      path: '/products/getAllProducts/:id',
      name: 'SelectedProduct',
      component: SelectedProduct,
      props: true,
    },
  ],
});

export default router;
