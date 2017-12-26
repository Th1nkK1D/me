<template>
  <div>
    <span>{{label}}</span>
    <div class="bar">
      <div class="scale" :id="label.slice(0,3)"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
  
export default {
  name: 'Skillbar',
  props: ['label','value'],
  data() {
    return {
      animValue: 0
    }
  },
  mounted() {
    anime({
      targets: '#'+this.label.slice(0,3),
      direction: 'normal',
      width: ['0%',this.value+'%'],
      round: 1,
      duration: 2000,
      loop: false,
      autoplay: true,
      easing: 'easeInOutQuad',
    });
  }
}
</script>

<style lang="scss" scoped>
  span {
    font-size: 12px;
  }

  .bar {
    height: 1px;
    margin-top: 3px;
    background-color: #D8D8D8;

    .scale {
      height: 100%;
      background-color: #5F537B;
    }
  }
</style>
