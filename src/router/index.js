import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/profile.vue'


const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'Profile', component: Profile },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem('Item')

  if(to.meta.requiresAuth && !isAuth) {
    next('/login')
  } else if (to.path === '/login' && isAuth) {
    next('/profile')
  } else {
    next()
  }
})

export default router;