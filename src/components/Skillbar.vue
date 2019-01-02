<template>
  <div :id="this.label.slice(0,3)">
    <div class="columns is-gapless is-mobile text">
      <div class="column">{{label}}</div>
      <div class="column is-narrow desc">{{desc}}</div>
    </div>
    <div class="bar">
      <div class="scale"></div>
      <div class="indicator" style="left: 25%"></div>
      <div class="indicator" style="left: 50%"></div>
      <div class="indicator" style="left: 75%"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
  
export default {
  name: 'Skillbar',
  props: ['label','value','desc'],
  data() {
    return {
      animValue: 0
    }
  },
  mounted() {
    const skillId = this.label.slice(0,3)

    this.$parent.$on('activateSkill', () => {
      anime.timeline({
        direction: 'normal',
        loop: false,
        autoplay: true,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '#'+skillId+' .scale',
        width: ['0%',this.value*25+'%'],
        round: 1,
        duration: 2000
      })
      .add({
        targets: '#'+skillId+' .desc',
        opacity: [0,1],
        duration: 1000
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 0 0 3px 0 !important;
  }

  .text {
    font-size: 12px;

    .desc {
      color: #919191;
      opacity: 0;
    }
  }

  .bar {
    height: 1px;
    margin-top: 3px;
    background-color: #D8D8D8;
    position: relative;

    .scale {
      height: 100%;
      width: 0%;
      background-color: #5F537B;
    }

    .indicator {
      height: 1px;
      width: 3px;
      background-color: white;
      position: absolute;
      top: 0;
    }
  }
</style>
