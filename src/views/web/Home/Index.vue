<template>
  <div id="Home">    
    <div class="container">
      <h3 v-if="resultSearch.length == 0">Pokemon não encontrado, para encontrar o Pokemon é necessário preencher o nome completo do mesmo.</h3>
      <div v-for="(item, index) in resultSearch" :key="item.url">
        <Card :name="item.name" :url="item.url" :id="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
import axios from "axios";
import Card from '@/components/Card/Card.vue'
export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {          
       await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then((res) => {       
        this.pokemons = res.data.results;
      });
  },
  computed: {
    ...mapState(['pokemon']),
    teste() {
    return  this.pokemons.includes(this.pokemon)
    },
    resultSearch() {      
      if (this.pokemon.trim() != '') {        
        return this.pokemons.filter((pokemon) => pokemon.name.toUpperCase() == this.pokemon.toUpperCase());
      } else {
        return this.pokemons;
      }
    },
   
  },
}
</script>

<style src="./style.scss" lang="scss" scoped />