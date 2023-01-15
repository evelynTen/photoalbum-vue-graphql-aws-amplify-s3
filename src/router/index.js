import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpPage from '../views/SignUpPage.vue';
import AlbumsDetailPage from '../views/AlbumsDetailPage.vue';
import AlbumsPage from '../views/AlbumsPage.vue';
import { Auth } from 'aws-amplify';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/album/:id",
    name: "AlbumsDetailPage",
    component: AlbumsDetailPage,
    meta: {requiresAuth: true}
  },
  {
    path: "/albums",
    name: "AlbumsPage",
    component: AlbumsPage,
    meta: {requiresAuth: true}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated){
    next("/");
  }
  else {
    next();
  }
})

export default router
