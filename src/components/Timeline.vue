<template>
  <div>
    <h1 :class="'title layer layer-'+layerClass">{{title}}</h1>
    <div :class="'timeline layer layer-'+layerClass">
      <div :class="'card layer layer-'+layerClass" v-for="(event,e) in data" :key="e">
        <div class="columns is-gapless">
          <div class="column">
            <p class="time">{{event.time}}</p>
            <p class="head"><strong class="title">{{event.head}}</strong> {{event.subhead}}</p>
            <p><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>
          </div>
          <div class="column is-narrow">
            <div class="columns is-gapless is-mobile is-multiline links">
              <div v-for="link in event.link" :key="link.icon" class="column is-12-tablet is-narrow-mobile">
                <a :href="link.url" target="_blank"><i :class="'icon-'+link.icon"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- <div class="spacer" v-if="e < data.length-1"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Timeline',
  props: ['title','data'],
  computed: {
    layerClass() {
      return this.title.slice(0,2).toLowerCase()
    }
  },
  mounted() {
    this.$once('onEnter', () => {
      anime.timeline({
        loop: false,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.stage',
        direction: 'normal',
        opacity: [0,1],
        duration: 1,
      })
      .add({
        targets: '.layer-'+this.layerClass,
        direction: 'normal',
        translateY: ['10vw',0],
        opacity: [0,1],
        duration: 1500,
        delay: (el,i) => i*100,
      })
    })
  },
}
</script>

<style lang="scss" scoped>
  .timeline {
    border: 0 #CBC2DF solid;
    border-left-width: 1px;

    .card {
      margin: 30px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.08) 0 0 20px;

      @media (max-width: 768px) {
        margin: 15px;
      }

      p {
        margin: 0;
      }

      .time {
        font-size: 12px;
        margin-bottom: 8px;
        color: #5F537B;
      }

      .head {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 12px;
        color: #5F537B;
      }

      .links {
        margin-top: 15px;
        text-align: right;

        a {
          color: #968cad;
          text-decoration: none;
          margin-right: 5px;
          font-size: 20px;

          &:hover {
            color: #d8d8d8;
          }
        }
      }

      .spacer {
        height: 30px;
      }
    }
  }
</style>
