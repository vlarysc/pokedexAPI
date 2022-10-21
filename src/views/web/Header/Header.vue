<template>
  <header id="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="">
      </div>
      <div class="search">
        <Search/>
      </div>
    </div>
  </header>
</template>

<script>

import Search from '@/components/Search/Search.vue'
export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
