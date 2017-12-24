<template>
  <div div="container">
    <div div="row">
      <div class="column">
        <router-link class="link" to="/profile"><i class="icon-emotsmile"></i></router-link>
      </div>
    </div>
    <div div="row">
      <div class="column">
        <router-link class="link" to="/profile"><i class="icon-graduation"></i></router-link>
      </div>
    </div>
    <div div="row">
      <div class="column">
        <router-link class="link" to="/profile"><i class="icon-briefcase"></i></router-link>
      </div>
    </div>
    <div div="row">
      <div class="column">
        <router-link class="link" to="/profile"><i class="icon-rocket"></i></router-link>
      </div>
    </div>
    <div div="row">
      <div class="column">
        <router-link class="link" to="/profile"><i class="icon-event"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  .row {
    .column {
      text-align: right;
      padding: 5px;

      .link {
        font-size: 2em;
        text-decoration: none;
        color: black;
      }
    }
  }
</style>
