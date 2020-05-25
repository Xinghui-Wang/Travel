<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 传入显示分页div的class
        loop: true // 图片可以循环轮播
      },
      swiperList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: '002',
        imgUrl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }, {
        id: '003',
        imgUrl: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
  // >>> 为穿透，即wrapper下的所有swiper-pagination-bullet-active类都有这个属性，去除scoped的影响
    background #ffffff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    // 百分比padding & margin 都是相对于父元素的width计算的，以上四句使width顶满，height自适应
    background #eeeeee
    .swiper-img
      width 100%
</style>
