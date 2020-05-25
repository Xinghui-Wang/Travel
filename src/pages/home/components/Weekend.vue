<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">
            {{item.title}}
          </p>
          <p class="item-desc">
            {{item.desc}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1612/55/555b08caf0bce928a3.img.png_710x360_30222e3e.png',
        title: '梵净山',
        desc: '独一无二，惊世骇俗'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/dd/dd5d2dd67f1d656990.img.jpg_710x360_3a3fa328.jpg',
        title: '西江千户苗寨',
        desc: '游览千户苗寨，感受苗族风情'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201405/29/b0768d0d5b8e70848df1808b467128cb.jpg_710x360_a6a5db6b.jpg',
        title: '小七孔景区',
        desc: '山、水、林、洞、湖、瀑为一体的原始奇景'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    text-indent .2rem
    background #eeeeee
    line-height .8rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 40%
    background red
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
</style>
