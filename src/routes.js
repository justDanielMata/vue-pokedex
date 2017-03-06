import Home from './components/Home.vue';
import Pokemon from './components/Pokemon.vue';

export const routes = [
  {path: '', component: Home},
  {path:'/pokemon', component: Pokemon}
];