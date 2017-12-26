<template>
  <div>
    <h1 class="title layer">{{title}}</h1>
    <div class="timeline layer">
      <div class="card layer" v-for="(event,e) in data" :key="e">
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
        
        <div class="spacer" v-if="e < data.length-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Timeline',
  props: ['title','data'],
  mounted() {
    anime({
      targets: '.layer',
      direction: 'normal',
      translateY: ['10vw',0],
      opacity: [0,1],
      duration: 1500,
      delay: (el,i) => i*100,
      loop: false,
      easing: 'easeOutQuad',
    })
  }
}
</script>

<style lang="scss" scoped>
  .timeline {
    border: 0 #CBC2DF solid;
    border-left-width: 1px;

    .card {
      padding: 0 30px;

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

        a {
          color: #d8d8d8;
          text-decoration: none;
          margin-right: 5px;
          font-size: 20px;

          &:hover {
            color: #968cad;
          }
        }
      }

      .spacer {
        height: 30px;
      }
    }
  }
</style>
