<template>
  <div class="row">
    <div class="col-md-3" v-for='pokemon in pokemonList'>
      <pokemon-details :pokemonData='pokemon'></pokemon-details>
    </div>
  </div>
</template>

<script>
import PokemonDetails from './PokemonDetails.vue';
export default {
  props: [ 'pokemon' ],
  
  components: {
    PokemonDetails: PokemonDetails,
  },

  data() {
    return {
      pokemonList: [],
    };
  },

  methods: {
    fetchData(url) {
      this.$http.get(url)
        .then(response => { return response.json(); })
        .then(data => { return this.pokemonList.push(data); });
    }
  },

  created() {
    this.pokemon.map(pokemon => {
      return this.fetchData(pokemon.url);
    })
  },
}
</script>

<style>
</style>