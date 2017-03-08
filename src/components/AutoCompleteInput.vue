<template>
  <div style='position:relative' :class="{'open' :openSuggestion}">
    <input class='form-control' type='text' v-model.trim='isSelected' 
      @input ='changeOption'
      @keydown.enter = 'enter'
      @keydown.down = 'down'
      @keydown.up = 'up'
      />
    <ul class="dropdown-menu" style="width:100%">
     <li v-for='(suggestion, index) in matches'
         :class="{'active': isActive(index)}"
         @click="suggestionClick(index)">
       <a href='#'>{{ suggestion }}</a>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: this.selected,
      open: false,
      current: 0,
    }
  },
  computed: {
    matches() {
      return this.options.filter(str => {
        return str.indexOf(this.isSelected) >= 0;
      });
    },

    openSuggestion() {
      return this.isSelected !== '' &&
             this.matches.length != 0 &&
             this.open === true;
    }
  },

  props: [ 'options', 'selected' ],
  methods: {
    emitEvent(value) {
      this.$emit('valueSelected', value);
    },

    enter() {
      this.isSelected = this.matches[this.current];
      this.emitEvent(this.isSelected);
      this.open = false;  
    },

    up() {
      if (this.current > 0)
        this.current--;
    },

    down() {
      if(this.current < this.options.length -1)
        this.current++;
    },

    isActive(index) {
      return index === this.current;
    },

    changeOption() {
      if (this.open == false) {
        this.open = true;
        this.current = 0;
      }
    },
    suggestionClick(index) {
      this.isSelected = this.matches[index];
      this.open = false;
      this.emitEvent(this.isSelected);
    },
  }
}
</script>