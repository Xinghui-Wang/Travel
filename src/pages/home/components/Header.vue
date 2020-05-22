<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icondemo01"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont iconsj-shang arrow-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- scoped 关键字表示该样式只作用于本文件，不会影响外部元素 -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
// 1rem = html font-size = 50px
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      color #cccccc
      background #ffffff
      border-radius .1rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
        font-size .18rem
        margin-left -.04rem
</style>
