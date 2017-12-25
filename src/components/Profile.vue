<template>
  <div>
    <div class="pure-g">
      <div class="pure-u-1-6">
        <navbar></navbar>
      </div>
      <div class="pure-u-5-6">
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

</style>


