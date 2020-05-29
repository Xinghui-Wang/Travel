<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont icontupian banner-icon"></span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade-animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
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
    CommonGallary,
    FadeAnimation
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
      background-image linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) // 增加一个从上到下的渐变背景
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
