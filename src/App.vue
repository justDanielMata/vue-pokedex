<template>
  <div class='container'>
    <div class='row'>
      <div class="col-md-2">
      <p>This is a simple project to check the power of vue.js and the different tools availble on the ecosystem</p>
      </div>
      <div class='col-md-10'>
        <h1>PokeDex</h1>
        <hr>
        <app-navigation></app-navigation>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components: {
    appNavigation: Nav
  }
}
</script>