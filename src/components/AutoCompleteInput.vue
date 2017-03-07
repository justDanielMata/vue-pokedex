<template>
 <input class='form-control' type='text' v-model.trim='input' @change='changeOption'/>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    }
  },
  props: [ 'options' ],
  methods: {
    changeOption() {
      this.$emit('inputChanged', this.input);
    }
  }
}
</script>