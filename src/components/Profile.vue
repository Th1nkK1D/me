<template>
  <div class="container is-fluid">
    <div class="columns is-gapless">
      <div class="column is-narrow">
        <div class="padder">
          <navbar></navbar>
        </div>
      </div>
      <div class="column">
        <div class="padder">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>    
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

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .2s;
  }

  .fade-enter-active {
    transition-delay: .2s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>


