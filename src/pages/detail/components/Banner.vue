<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/cd9a66fd-d1af-48fa-91e1-6dd379846b14.jpg_r_640x420x95_bf510763.jpg">
      <div class="banner-info">
        <div class="banner-title">产品编号 1026883696</div>
        <div class="banner-number">
          <span class="iconfont icontupian banner-icon"></span>
          6
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/cd9a66fd-d1af-48fa-91e1-6dd379846b14.jpg_r_640x420x95_bf510763.jpg',
        'https://img1.qunarzz.com/vs_ceph_vs_tts/d1920fd2-f119-4ce5-bd50-be84f83bb834.jpg_r_1280x840x95_0f68c547.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      bottom 0
      left 0
      right 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) // 增加一个从上到下的渐变背景
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .32rem
        line-height .32rem
        margin-top .14rem
        margin-right .2rem
        height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
