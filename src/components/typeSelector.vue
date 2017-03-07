<template>
<div>
  <span v-for='pType in pokemonTypes'>
    <button :class='[btn, pType.name]' style="margin:0.5em;" @click='getPokemonByType(pType.name)'>{{ pType.name }}</button>
  </span>
</div>
</template>

<script>
export default {
  data() {
    return {
      btn: 'btn',
      pokemonByType: [],
      }
  },
  props:[ 'pokemonTypes' ],
  methods: {
    getPokemonByType(name) {
      this.resource.pokemonByType({type: name})
        .then( response => { return response.json(); })
        .then( data => {
          return this.pokemonByType = data.pokemon;
        })
    } 
  },
  
  created() {
    const customActions = {
      pokemonByType: { method: 'GET' }
    };
    this.resource = this.$resource('type/{type}/', {}, customActions);
  }
}
</script>

<style lang='scss'>
@import "../assets/styles/type.scss";
</style>