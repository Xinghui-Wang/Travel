<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 传入显示分页div的class
        loop: true // 图片可以循环轮播
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
      // v-if使得接收到数据后(len不为0)再创建swiper组件，避免渲染出的首页图片是列表中的最后一个元素
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
