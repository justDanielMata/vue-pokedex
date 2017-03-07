<template>
  <div>
    <form class='pokeSearch'>
      <input class='form-control' type='text' v-model.trim='pokemonToSearch' />
      <br />
    </form>
    <button class='btn btn-default' @click='searchPokemon'> Search </button>
    <hr />
    <div class="row">
      <pokemon-details :pokemonData='pokemonData' v-if='pokemonData'></pokemon-details>
    </div>
  </div>
</template>

<script>
import pokemonDetails from './PokemonDetails.vue';

  export default {
    name: 'Pokemon',
    data() {
      return {
        pokemonData : undefined,
        pokemonToSearch: '',
        }
    },
    components: {
      pokemonDetails: pokemonDetails,
    },
    methods: {
      searchPokemon() {
        this.resource.getPokemon({pokemonToSearch: this.pokemonToSearch})
          .then( response => {
            return response.json();
          })
          .then(data => {
            this.pokemonToSearch = '';
            return this.pokemonData = data});
        
      }  
    },

    created() {
      const customActions = {
        getPokemon: {method: 'GET'}
      };
      this.resource = this.$resource('pokemon/{pokemonToSearch}', {}, customActions);
    }
  }
</script>

<style>
  .pokeSearch {
    padding-top: 10px;
  }
</style>