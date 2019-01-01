<template>
  <div class="container is-fluid">
    <div class="columns is-gapless wrapper">
      <div class="column is-2-tablet is-12-mobile nav">
        <!-- <navbar></navbar> -->
      </div>
      <div class="column is-2-tablet is-12-mobile"></div>
      <div class="column">
        <div class="padder">
          <slot></slot>
        </div>    
      </div>
      <div class="column is-1"></div>
    </div>
    <!-- <div class="footer">
      <p>
        <a href="https://github.com/Th1nkK1D/me" target="_blank">
          Crafted with <i class="icon-heart"></i> by Th1nkK1D
        </a>
      </p>
    </div> -->
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
  .container {
    min-height: calc(100vh - 30px);
    position: relative;
  }

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
    padding: 50px 0;

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 29;
      background-color: white;
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: -30px;
    width: 100vw;
    height: 30px;
    font-size: 12px;

    a {
      text-decoration: none;
      color: #968cad;

      &:hover {
        color: #5F537B;
      }
    }
  }
</style>


