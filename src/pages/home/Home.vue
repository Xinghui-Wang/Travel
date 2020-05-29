<template>
<!-- 模版对外只能有一个标签 -->
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
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
import { reactive, onMounted, ref } from 'vue'
// reactive 修饰对象为响应式，ref 修饰数组/字符串...为响应式
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
    // const data = reactive({ // 可通过定义data对象将数据存于其中，也可直接定义多个数据
    //   swiperList: [],
    //   iconsList: [],
    //   recommendList: [],
    //   weekendList: []
    // })
    const swiperList = ref([])
    const iconsList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])
    const store = useStore()
    // 直接通过.state取vuex里的数据
    const city = store.state.city
    async function getHomeInfo () {
      let res = await axios.get('/api/index.json?city=' + city)
      res = res.data
      if (res.ret && res.data) {
        const result = res.data
        swiperList.value = result.swiperList // 单独定义ref时需要 .value 来更改数据，定义在data中则 data.swiperList
        iconsList.value = result.iconList // 在html中使用时不需要 .value
        recommendList.value = result.recommendList
        weekendList.value = result.weekendList
      }
    }
    onMounted (() => {
      getHomeInfo()
    })
    return { swiperList, iconsList, recommendList, weekendList }
  }
}
</script>

<style>

</style>
