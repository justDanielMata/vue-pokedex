import Home from './components/Home.vue';
import PokemonSearch from './components/PokemonSearch.vue';
import DexPage from './components/DexPage/Container.vue';

export const routes = [
  {path: '', component: Home},
  {path:'/search', component: PokemonSearch},
  {path:'/pokemon/:name', component: DexPage}
];