<template>
  <div>
    <h1 class="title">ME</h1>

    <div class="row bio">
      <div class="four columns">
        <img src="/static/img/lkavatar.jpg" alt="" class="avatar">
      </div>
      <div class="eight columns">
        <h1 class="name">Withee Poositasai</h1>
        <div class="row">
          <div class="column"></div>
        </div>
        <p><i class="icon-direction"></i> 17 Soi Panichthon 21 Jarun 13 Rd. Bangkokyai, Bangkok, Thailand 10600</p>
        <div class="row">
          <div class="six columns"><i class="icon-present"></i> 13 Nov 1996</div>
          <div class="six columns"><i class="icon-phone"></i> (+66) 85 125 5278</div>
        </div>
        <div class="row">
          <div class="six columns"><i class="icon-envelope-open"></i> witheep@gmail.com</div>
          <div class="six columns"><i class="icon-social-github"></i> Th1nkK1D</div>
        </div>
        <div class="row">
          <div class="six columns"><i class="icon-social-facebook"></i> Lookkid Withee Poositasai</div>
          <div class="six columns"><i class="icon-social-youtube"></i> Witheep</div>
        </div>
      </div>
    </div>

    <h4 class="subtitle">Skills</h4>

    <div class="row"></div>
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
      width: 100%;
      height: auto;
      border-radius: 50%;
    }

    .name {
      font-weight: bold;
    }
  }
</style>
