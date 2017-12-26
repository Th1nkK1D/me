<template>
  <div class="container is-fluid">
    <div class="columns is-gapless wrapper">
      <div class="column is-2-tablet is-12-mobile nav">
        <navbar></navbar>
      </div>
      <div class="column is-2-tablet is-12-mobile"></div>
      <div class="column">
        <div class="padder">
          <router-view></router-view>
        </div>    
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'Profile',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  h1 {
    font-weight: 300;
    font-size: 58px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .title {
    color: #5F537B;
  }
  .padder {
    margin: 0.5em 1em;
  }

  .wrapper {
    position: relative;
    padding-top: 50px;

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 29;
      background-color: white;
    }
  }
</style>


