<template>
  <div>
    <h1>Pokedex</h1>
    <p> This is a Pokedex created to test vue.js capabilities, click on the buttons to the left to move to diferent pages</p>
    <p> or click one of the button types bellow to bring a list of pokemon belonging to that type </p>
    <hr />
    <type-selector :pokemonTypes='pokemonTypes'></type-selector>
  </div>
</template>

<script>
import typeSelector from './typeSelector.vue';
export default {
  data() {
    return {
    pokemonTypes: undefined,
    }
  },

  components: {
    typeSelector: typeSelector,
  },

  created() {
    this.$http.get('type')
      .then(response => (response.json() ))
      .then(data => this.pokemonTypes = data.results);
  }
}
</script>

<style lang="scss">
</style>
