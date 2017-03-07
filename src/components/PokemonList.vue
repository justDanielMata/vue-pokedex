<template>
<div>
  <ul class='list-group' v-for='name in pokemon'>
    <li class='list-group-item'><span class="badge"> <i class="glyphicon glyphicon-chevron-right"></i> </span> {{ name }} </li>  
  </ul>
</div>
</template>

<script>
export default {
  props: [ 'pokemon' ],
}
</script>

<style>
.badge {
  cursor: pointer;
}
</style>