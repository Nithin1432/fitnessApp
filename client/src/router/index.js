import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Diets from '../views/Diets.vue';
import Exercise from '../views/Exercise.vue';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Suggestion from '../views/Suggestion.vue';
import Register from '../views/Register.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/exercise-logs', component: Exercise },
  { path: '/diet-logs', component: Diets },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/suggestion', component: Suggestion },
  { path: '/signup', component: Register },
];


const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router