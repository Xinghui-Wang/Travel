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
import { ref, reactive, onMounted, onUnmounted } from 'vue'
export default {
  name: 'DetailHeader',
  setup () {
    const showAbs = ref(true)
    const opacityStyle = reactive({
      opacity: 0
    })

    function handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset // 兼容性处理
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        opacityStyle.opacity = opacity
        showAbs.value = false
      } else {
        showAbs.value = true
      }
    }

    onMounted (() => { // 事件绑定在了window上，这就定义了一个全局事件，将会在后续中影响其他组件
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted (() => { // 在离开此渲染页面时，将全局事件解绑
      window.removeEventListener('scroll', handleScroll)
    })

    return { showAbs, opacityStyle}
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
    z-index 100
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
