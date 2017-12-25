<template>
  <div class="columns is-multiline navbar">
    <div class="column is-12 item" v-for="item in menuItem" :key="item.route">
      <router-link :class="{'link': true, 'active': $route.path == item.route}" :to="item.route"><i :class="'icon-' + item.icon"></i></router-link>
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
        {name: 'Me', route: '/profile', icon: 'user'},
        {name: 'Education', route: '/education', icon: 'graduation'},
        {name: 'Work Experience', route: '/work', icon: 'briefcase'},
        {name: 'Projects', route: '/projects', icon: 'rocket'},
        {name: 'Activities', route: '/activities', icon: 'puzzle'},
      ]
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
  text-align: right;
  margin: 150px 20px 0 0;

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

</style>
