<template>
    <div class="thumbnail">
    <img :src="spriteUrl" alt="pokemon shape" class='img-thumbnail'>
      <div class="caption">
        <h3 style='text-align: center'> {{ pokemonData.name }} </h3>
          <p>
            <button :class='[{btn: true , margin: true}, pType]' v-for='pType in pokemonType'>{{ pType }}</button>
            <span class="badge" style='cursor:pointer'>...</span>
          </p>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'pokemonData'
  ],

  computed: {
    pokemonType: function () {
      const types = this.pokemonData.types.map(type => type.type.name);
      return types;
    },

    spriteUrl: function () {
      return this.pokemonData.sprites.front_default;
    }
  },
}
</script>

<style>
  @import '../assets/styles/type.scss';
    .margin {
      margin-right: 0.5em;
      text-align: center;
    }
</style>