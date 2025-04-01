import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


const routes = [
  { path: '/', name: 'home', component: Main },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;