<template>
  <div>
    <form class='pokeSearch'>
      <auto-complete 
        :selected = 'pokemonToSearch'
        :options='options'
        @valueSelected='setPokemonAndSearch($event)'> 
      </auto-complete>
      <br />
    </form>
    <button class='btn btn-default' @click='searchPokemon'> Search </button>
    <hr />
    <div class="alert alert-danger" v-if='error'> {{ errorText }}</div>
    <div class="row">
      <div class="col-md-3" v-for='pokemon in pokemonData'>
        <pokemon-details :pokemonData='pokemon'></pokemon-details>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonDetails from './PokemonDetails.vue';
import autoCompleteInput from './AutoCompleteInput.vue';

  export default {
    name: 'Pokemon',
    data() {
      return {
        options: [],
        pokemonData : [],
        pokemonToSearch: '',
        error: undefined,
        }
    },
    components: {
      pokemonDetails: pokemonDetails,
      autoComplete: autoCompleteInput,
    },
    methods: {
      setPokemonAndSearch(pokemon){
        this.pokemonToSearch = pokemon;
        this.searchPokemon();
      },

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
        
        createOptions(pokemon) {
          this.options= pokemon.map(p => p.name);
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
        this.$http.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
        .then(response => {
          return response.json();
        })
        .then(data => this.createOptions(data.results));
    }
  }
</script>

<style>
  .pokeSearch {
    padding-top: 10px;
  }
</style>