<template>
  <div>
    <form class='pokeSearch'>
      <input class='form-control' type='text' v-model.trim='pokemonToSearch' @click='reset'/>
      <br />
    </form>
    <button class='btn btn-default' @click='searchPokemon'> Search </button>
    <hr />
    <div class="alert alert-danger" v-if='error'> {{ errorText }}</div>
    <div class="row">
      <div class="col-md-2" v-for='pokemon in pokemonData'>
        <pokemon-details :pokemonData='pokemon'></pokemon-details>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonDetails from './PokemonDetails.vue';

  export default {
    name: 'Pokemon',
    data() {
      return {
        pokemonData : [],
        pokemonToSearch: '',
        error: undefined,
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
          }, error => {
            this.error = error.status;
            return Promise.reject(error);
          })
          .then(data => {
            this.pokemonToSearch = '';
            return this.pokemonData.push(data)});
        },

        reset() {
          this.pokemonToSearch = '';
          this.error = undefined;
        }

    },

    computed: {
      errorText: function() {
        return `Sorry, we couldn't find anything with the name ${this.pokemonToSearch}`;
      }
    },

    created() {
      const customActions = {
        getPokemon: {method: 'GET'}
      };
      this.resource = this.$resource('pokemon/{pokemonToSearch}/', {}, customActions);
    }
  }
</script>

<style>
  .pokeSearch {
    padding-top: 10px;
  }
</style>