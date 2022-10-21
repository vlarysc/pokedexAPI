<template>
  <Header></Header>
  <router-view />
</template>

<script>

import Header from './views/web/Header/Header.vue';
export default {
  name: 'App',
  components: {  
    Header  
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0
}
</style>
