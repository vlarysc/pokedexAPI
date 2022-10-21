<template>
  <form>
    <input type='text' placeholder='Find your pokemon' @change="filtrator" v-model="pokemon">
    <button @click.prevent="filtrator">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </form>
</template>

<script>
import {  
  mapActions
} from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      pokemon: ''
    }
  },
  methods: {
    ...mapActions(['setSearch']),
    filtrator(e) {
      e.preventDefault
      this.setSearch(this.pokemon);
    }
  },

}
</script>

<style src="./style.scss" lang="scss" scoped />