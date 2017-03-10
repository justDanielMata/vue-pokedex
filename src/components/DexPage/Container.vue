<script>
export default {
  data() {
    return {
      pokemon: this.$route.params.name,
    }
  }
};
</script>

<template>
<p> {{ pokemon }}</p>
</template>