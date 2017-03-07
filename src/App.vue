<template>
  <div class='container'>
    <div class="row">
      <div class="col-md-2">
        <app-navigation></app-navigation>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  components: {
    appNavigation: Nav,
  }
}
</script>