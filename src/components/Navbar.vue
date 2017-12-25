<template>
  <div div="columns is-gapless is-multiline">
      <div class="column is-12">
        <router-link class="link" to="/profile"><i class="icon-emotsmile"></i></router-link>
      </div>
      <div class="column is-12">
        <router-link class="link" to="/education"><i class="icon-graduation"></i></router-link>
      </div>
      <div class="column is-12">
        <router-link class="link" to="/work"><i class="icon-briefcase"></i></router-link>
      </div>
      <div class="column is-12">
        <router-link class="link" to="/projects"><i class="icon-rocket"></i></router-link>
      </div>
      <div class="column is-12">
        <router-link class="link" to="/activities"><i class="icon-event"></i></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>

.link {
  font-size: 2em;
  text-decoration: none;
  color: black;
}
</style>
