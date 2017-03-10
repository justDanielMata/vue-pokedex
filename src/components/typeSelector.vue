<template>
<div>
  <span v-for='pType in pokemonTypes'>
    <button class='btn' :class='[pType.name]' style="margin:0.5em;" @click='getPokemonByType(pType.name)'>{{ pType.name }}</button>
  </span>
  <hr />
  <pokemon-list :pokemon='this.pokemonByType' v-if='this.pokemonByType.length > 0'></pokemon-list>
</div>
</template>

<script>
import pokemonList from './PokemonList.vue';
export default {
  data() {
    return {
      pokemonByType: []
      }
  },
  props:[ 'pokemonTypes' ],
  methods: {
    getPokemonByType(name) {
      this.resource.pokemonByType({type: name})
        .then( response => { return response.json(); })
        .then( data => {
          return this.pokemonByType = data.pokemon.map(p => ({name: p.pokemon.name, url:p.pokemon.url}));
        })
    } 
  },

  components: {
    pokemonList,
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