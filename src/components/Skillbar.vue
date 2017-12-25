<template>
  <div class="container">
    <span>{{label}}</span>
    <div class="columns is-gapless bar">
      <div :class="'column is-'+value+' scale'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skillbar',
  props: ['label','value'],
}
</script>

<style lang="scss" scoped>
  span {
    font-size: 12px;
  }
  .bar {
    height: 3px;
    background-color: #D8D8D8;

    .scale {
      background-color: #5F537B;
    }
  }
</style>
