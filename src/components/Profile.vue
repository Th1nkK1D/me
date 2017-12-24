<template>
  <div class="container">
    <div class="row">
      <div class="two columns">
        <navbar></navbar>
      </div>
      <div class="ten columns">
        <router-view></router-view>
      </div>
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
  .title {
    color: #5F537B;
  }
</style>


