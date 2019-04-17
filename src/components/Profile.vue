<template>
  <div class="container is-fluid">
    <div class="columns is-gapless wrapper">
      <div class="column is-2-tablet is-12-mobile"></div>
      <div class="column">
        <div class="padder">
          <slot></slot>
        </div>    
      </div>
      <div class="column is-1"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
}
</script>

<style lang="scss">
  .container {
    position: relative;
  }

  .title {
    color: #5F537B;

    &.t1 {
      font-weight: 300;
      font-size: 58px;
    }

    &.t2 {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .padder {
    margin: 0.5em 1em;
  }

  .wrapper {
    padding: 20px 0 50px;
  }
</style>


