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
@import '../node_modules/bulma/sass/grid/columns.sass';
@import '../node_modules/bulma/sass/base/_all.sass';

// $simple-line-font-path: '../node_modules/simple-line-icons/fonts/';
// @import '../node_modules/simple-line-icons/scss/simple-line-icons.scss';

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
