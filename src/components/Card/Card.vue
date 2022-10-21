<template>
  <div id="card" :class="pokemon.type" @click="invertCard">
    <div class="container" v-show="isFront">
      <div class="pokemon-img">
        <img :src="pokemon.image" :alt="`Pokemon ${pokemon.type}`">
      </div>
      <div class="pokemon-name">
        {{name[0].toUpperCase() + name.substr(1)}}
      </div>
    </div>
    <div class="container" v-show="!isFront">
      <div class="status pokemon-hp">
        <div class="status-item">HP </div>
        <div class="life-bar">
          <div :style="{width: pokemon.hp + '%'}"></div>
        </div>
        <div class="hp">
          {{pokemon.hp}}/100
        </div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item">Attack</div>
          <div class="stats">
            <strong>{{pokemon.attack}}</strong>
          </div>
          <img width="100" src="@/assets/image/sword.svg" alt="" />
        </div>
        <div class="status">
          <div class="status-item">Defense</div>
          <div class="stats">
            <strong>{{pokemon.defense}}</strong>
          </div>
          <img width="100" src="@/assets/image/shield.svg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item">S. Attack</div>
          <div class="stats">
            <strong>{{pokemon.specialAttack}}</strong>
          </div>
          <img width="100" src="@/assets/image/sword.svg" alt="" />
        </div>
        <div class="status">
          <div class="status-item">S. Defense</div>
          <div class="stats">
            <strong>{{pokemon.specialDefense}}</strong>
          </div>
          <img width="100" src="@/assets/image/shield.svg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="status">
          <div class="status-item type">Pokemon type</div>
          <div class="stats">
            <strong>{{pokemon.type}}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Cards',
  data() {
    return {
      isFront: true,
      pokemon: {
        type: "",
        image: "",
        hp: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
      }
    };
  },
  methods: {
    invertCard() {
      this.isFront = !this.isFront;
    }
  },
  created() {
    this.$nextTick(async () => {
      await axios.get(this.url).then((res) => {
        this.pokemon.hp = res.data.stats[0].base_stat;
        this.pokemon.attack = res.data.stats[1].base_stat;
        this.pokemon.defense = res.data.stats[2].base_stat;
        this.pokemon.specialAttack = res.data.stats[3].base_stat;
        this.pokemon.specialDefense = res.data.stats[4].base_stat;
        this.pokemon.type = res.data.types[0].type.name;
        this.pokemon.image = res.data.sprites.other["official-artwork"].front_default;
      });
    });
  },
  props: {
    id: Number,
    name: String,
    url: String
  },
}
</script>





<style src="./style.scss" lang="scss" scoped />