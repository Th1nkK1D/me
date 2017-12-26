<template>
  <div class="container is-fluid">
    <div class="columns is-gapless">
      <div class="column is-2">
        <div class="padder">
          <navbar></navbar>
        </div>
      </div>
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
  .padder {
    margin: 0.5em 1em;
  }

  h1 {
    font-weight: 300;
    font-size: 58px;
  }

  h1, h2 {
    color: #5F537B;
  }
</style>


