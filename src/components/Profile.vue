<template>
  <div class="container">
    <div class="row">
      <div class="two columns"><span class="icon-direction"></span></div>
      <div class="ten columns">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss">
  .title {
    color: #5F537B;
  }
</style>


