<template>
  <div class="columns is-mobile is-multiline navbar">
    <div class="column is-12-tablet is-hidden-mobile offseter"></div>
    <div class="column is-12-tablet item" v-for="item in menuItem" :key="item.route">
      <div class="columns is-gapless">
        <div class="column is-hidden-mobile"></div>
        <transition name="fade">
          <div v-if="$route.path != item.route && hovering == item.route" class="column is-narrow is-hidden-mobile label">
            <p>{{item.name}}</p>
          </div>
        </transition>
        <div class="column is-narrow" @mouseover="hovering = item.route" @mouseleave="hovering = null">
          <router-link :class="{'link': true, 'active': $route.path == item.route}" :to="item.route"><i :class="'icon-' + item.icon"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Navbar',
  data() {
    return {
      menuItem: [
        {name: 'Levitate', route: '/', icon: 'cloud-upload'},
        {name: 'Me', route: '/profile', icon: 'user'},
        {name: 'Education', route: '/education', icon: 'graduation'},
        {name: 'Work', route: '/work', icon: 'briefcase'},
        {name: 'Projects', route: '/projects', icon: 'rocket'},
        {name: 'Activities', route: '/activities', icon: 'puzzle'},
      ],
      hovering: null,
    }
  },
  mounted() {
    anime({
      targets: '.item',
      direction: 'normal',
      translateX: ['-20vw',0],
      opacity: [0,1],
      duration: 1000,
      delay: (el,i) => 1000 + i*200,
      loop: false,
      easing: 'easeOutQuad',
    })
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  text-align: center;
  margin: 5px;

  .offseter {
    height: 130px;
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
      font-size: 2em;
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
