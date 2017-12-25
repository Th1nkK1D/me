<template>
  <div class="columns is-multiline navbar">
    <div class="column is-12 item">
      <router-link class="link" to="/profile"><i class="icon-emotsmile"></i></router-link>
    </div>
    <div class="column is-12 item">
      <router-link class="link" to="/education"><i class="icon-graduation"></i></router-link>
    </div>
    <div class="column is-12 item">
      <router-link class="link" to="/work"><i class="icon-briefcase"></i></router-link>
    </div>
    <div class="column is-12 item">
      <router-link class="link" to="/projects"><i class="icon-rocket"></i></router-link>
    </div>
    <div class="column is-12 item">
      <router-link class="link" to="/activities"><i class="icon-event"></i></router-link>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Navbar',
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
    color: black;
  }
}

</style>
