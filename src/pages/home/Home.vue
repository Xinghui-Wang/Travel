<template>
<!-- 模版对外只能有一个标签 -->
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="data.swiperList"></home-swiper>
    <home-icons :iconsList="data.iconsList"></home-icons>
    <home-recommend :recommendList="data.recommendList"></home-recommend>
    <home-weekend :weekendList="data.weekendList"></home-weekend>
  </div>
</template>

<script>
// Composition API
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { useStore } from 'vuex'
import { reactive, computed, onMounted, onActivated } from 'vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup () { // 组件初始化时执行一次
    const data = reactive({
      lastCity: '',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    })
    const store = useStore()
    const city = computed(() => {
      return store.state.city
    })
    function getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        data.swiperList = result.swiperList
        data.iconsList = result.iconList
        data.recommendList = result.recommendList
        data.weekendList = result.weekendList
      }
    }
    function getHomeInfo () {
      axios.get('/api/index.json?city=' + city.value)
        .then(getHomeInfoSucc)
    }
    onMounted (() => {
      console.log(1)
      data.lastCity = city
      getHomeInfo()
    })
    onActivated (() => { // 使用keep-alive标签时独有的生命周期函数，在每次页面重新渲染时调用
      if (this.lastCity !== this.city) { // 优化性能，当本次城市与上次不一致时才需要重新用ajax请求数据
        data.lastCity = city
        getHomeInfo()
      }
    })
    return {
      data
    }
  }
}
</script>

<style>

</style>
