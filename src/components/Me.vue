<template>
  <div class="pure-g">
    <div class="pure-u-1">
      <h1 class="title">ME</h1>
    </div>
    <!-- Bio -->
    <div class="pure-u-1 bio">
      <div class="pure-g">
        <div class="pure-u-1-6">
          <img src="/static/img/lkavatar.jpg" alt="" class="pure-img avatar">
        </div>
        <div class="pure-u-5-6">
          <div class="pure-u-1">
            <h1 class="name">Withee Poositasai</h1>
          </div>
          <div class="pure-u-1">
            <div class="detail"><i class="icon-direction"></i> 17 Soi Panichthon 21 Jarun 13 Rd. Bangkokyai, Bangkok, Thailand 10600</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-present"></i> 13 Nov 1996</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-phone"></i> (+66) 85 125 5278</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-envelope-open"></i> witheep@gmail.com</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-social-github"></i> Th1nkK1D</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-social-facebook"></i> Lookkid Withee Poositasai</div>
          </div>
          <div class="pure-u-1-3">
            <div class="detail"><i class="icon-social-youtube"></i> Witheep</div>
          </div>
        </div>
      </div>
    </div><!-- End of Bio -->
    <div class="pure-u-1">c</div>
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
