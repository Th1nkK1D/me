<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from '@/views/Landing'
import Me from '@/views/Me'
import Education from '@/views/Education'
import Work from '@/views/Work'
import Projects from '@/views/Projects'
import Activities from '@/views/Activities'

export default {
  name: 'app',
  components: {
    Landing,
    Me
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/sass/utilities/_all.sass';
@import '../node_modules/bulma/sass/grid/columns.sass';
@import '../node_modules/bulma/sass/base/_all.sass';

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
