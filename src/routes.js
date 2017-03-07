import Home from './components/Home.vue';
import PokemonSearch from './components/PokemonSearch.vue';

export const routes = [
  {path: '', component: Home},
  {path:'/pokemon', component: PokemonSearch}
];