<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '../node_modules/bulma/sass/utilities/_all.sass';
@import '../node_modules/bulma/sass/grid/_all.sass';
@import '../node_modules/bulma/sass/layout/_all.sass';

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
