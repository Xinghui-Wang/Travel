<template>
  <ul>
    <li
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="iconfont iconmenpiao item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-show="item.children">
        <detail-list :list="item.children"></detail-list>
        <!-- 递归组件，自己通过name调用自己 -->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      color $bgColor
      margin-right .1rem
  .item-children
    padding 0 .2rem
    color #666666
</style>
