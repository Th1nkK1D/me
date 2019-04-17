<template>
  <div class="columns is-mobile is-multiline navbar nav-desktop">
    <div class="column is-12-tablet is-hidden-mobile offseter"></div>
    <div class="column is-12-tablet item" v-for="(item, i) in menuItem" :key="item.route">
      <div class="columns is-gapless">
        <div class="column is-hidden-mobile"></div>
        <transition name="fade">
          <div v-if="hovering === item.route" class="column is-narrow is-hidden-touch label">
            <p>{{item.name}}</p>
          </div>
        </transition>
        <div class="column is-narrow" @mouseover="hovering = item.route" @mouseleave="hovering = null">
          <a :href="item.route" :class="{'link': true, 'active': active === i }" v-smooth-scroll="{ duration: 1000 }">
            <i :class="'icon-' + item.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

let timeline

export default {
  name: 'Navbar',
  props: ['active'],
  data() {
    return {
      menuItem: [
        {name: 'Levitate', route: '#app', icon: 'cloud-upload'},
        {name: 'Me', route: '#me', icon: 'user'},
        {name: 'Education', route: '#education', icon: 'graduation'},
        {name: 'Work', route: '#work', icon: 'briefcase'},
        {name: 'Projects', route: '#projects', icon: 'rocket'},
        {name: 'Activities', route: '#activities', icon: 'puzzle'},
      ],
      hovering: null,
    }
  },
  mounted() {
    timeline = anime.timeline({
      direction: 'normal',
      loop: false,
      autoplay: false,
      easing: 'easeOutQuad',
    })
    .add({
      targets: '.navbar',
      opacity: [0,1],
      translateY: ['70px',0],
      duration: 500,
    })
    .add({
      targets: '.item',
      translateX: ['-20vw',0],
      opacity: [0,1],
      duration: 1000,
      delay: (el,i) => i*200,
    })

    this.$on('onEnter', () => {
      timeline.restart()
      timeline.play()
    })

    this.$on('onLeave', () => {
      timeline.reverse()
      timeline.play()
    })
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  text-align: center;
  margin: 0;
  position: fixed;
  left: 0;
  opacity: 0;
  z-index: 100;
  top: 20vh;
  width: 15vw;

  @media (max-width: 768px) {
    top: unset;
    bottom: 0;
    width: 100vw;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 2px;
  }

  .item {
    .label {
     display: flex;
     justify-content: center;

      p {
        margin: auto 5px;
        color: #968cad;
      }
    }


    .link {
      font-size: 1.8em;
      text-decoration: none;
      color: #d8d8d8;

      &:hover {
        color: #968cad;
      }

      &.active {
        color: #5F537B;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(5px);
}

</style>
