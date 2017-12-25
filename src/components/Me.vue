<template>
  <div>
    <h1 class="title">ME</h1>
    <!-- bio -->
    <div class="columns bio">
      <div class="column is-narrow">
        <img src="/static/img/lkavatar.jpg" alt="" class="avatar">
      </div>
      <div class="column">
        <h1 class="name">Withee Poositasai</h1>

        <div class="columns is-multiline">
          <div class="column is-12">
            <i class="icon-direction"></i> 17 Soi Panichayakarnthonburi 21, Jarunsamitwong 13 Rd, Bangkokyai, Bangkok, Thailand 10600
          </div>
          <div class="column is-3">
            <i class="icon-present"></i> 13 Nov 1996
          </div>
          <div class="column is-3">
            <i class="icon-phone"></i> (+66) 85 125 5278
          </div>
          <div class="column is-3">
            <i class="icon-envelope-open"></i> witheep@gmail.com
          </div>
          <div class="column is-3">
            <i class="icon-social-github"></i> Th1nkK1D
          </div>
          <div class="column is-3">
            <i class="icon-social-facebook"></i> Lookkid Withee Poositasai
          </div>
          <div class="column is-3">
            <i class="icon-social-youtube"></i> Witheep
          </div>
        </div>
      </div>
    </div><!-- end of bio -->
  </div>
</template>


<script>
export default {
  name: 'Me'
}
</script>

<style lang="scss" scoped>
  .bio {
    .avatar {
      border-radius: 50%;
      width: 10em;
      height: auto;
    }

    .name {
      font-weight: bold;
      margin: 0 0 0.5em 0;
    }

    .detail {
      margin: 0.5em;
    }
  }
</style>
