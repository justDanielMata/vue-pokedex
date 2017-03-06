<template>
  <div class='container'>
   <ul>
      <li class='list-group-item' v-for='p in pokemon'>{{ p }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Pokemon',
    data() {
      return {pokemon : []}
    },

    created() {
      this.$http.get('pokemon')
        .then( response => {
          return response.json();
        })
        .then(data => {
          data.results.forEach(e => this.pokemon.push(e.name))
        });
    }

  }
</script>