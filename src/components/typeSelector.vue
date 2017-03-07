<template>
<div>
  <span v-for='pType in pokemonTypes'>
    <button :class='[btn, pType.name]' style="margin:0.5em;">{{ pType.name }}</button>
  </span>
</div>
</template>

<script>
export default {
  data() {
    return {
      btn: 'btn'
      }
  },
  props:[ 'pokemonTypes' ],
}
</script>

<style lang='scss'>
@import "../assets/styles/type.scss";
</style>