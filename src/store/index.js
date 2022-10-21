import { createStore } from 'vuex';
export default createStore({
  state: {
    pokemon: '',
  },
  mutations: {
    searchPokemon(state, payload) {
      state.pokemon = payload;
    }
  },
  getters:{},
  actions: {
    setSearch(context, payload) {
      context.commit('searchPokemon', payload);      
    },
  }
})