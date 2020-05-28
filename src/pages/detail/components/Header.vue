<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont iconfanhui1 header-abs-back"></div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont iconfanhui1 header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // 事件绑定在了window上，这就定义了一个全局事件，将会在后续中影响其他组件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 在离开此渲染页面时，将全局事件解绑
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #ffffff
</style>
