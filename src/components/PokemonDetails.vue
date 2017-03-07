<template>
    <div class="thumbnail">
    <img :src="spriteUrl" alt="pokemon shape" class='img-thumbnail'>
      <div class="caption">
        <h3> {{ pokemonData.name }} </h3>
        <p><button :class='[{btn: true}, pokemonType]'>{{ pokemonType }}</button></p>
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
      return this.pokemonData.types[0].type.name;
    },

    spriteUrl: function () {
      return this.pokemonData.sprites.front_default;
    }
  },
}
</script>

<style>
@import '../assets/styles/type.scss';
</style>