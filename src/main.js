import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
Vue.use(VueResource);

Vue.http.options.root = 'http://pokeapi.co/api/v2';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
