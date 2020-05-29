<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  setup (props) {
    const keyword = ref('')
    const list = ref([])
    let timer = null

    const hasNoData = computed (() => {
      return !list.value.length
    })
    
    watch (keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (value.spell.indexOf(keyword) > -1 || value.name.indexOf(keyword) > -1) {
              result.push(value)
            }
          })
        }
        list.value = result
      }, 100)
    })

    const store = useStore()
    const router = useRouter()
    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }
    
    const search = ref(null)
    onMounted (() => {
      new Bscroll(search.value, {
        click: true
      })
    })

    return { keyword, list, hasNoData, search, handleCityClick }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      box-sizing border-box
      padding 0 .1rem
      border-radius .06rem
      color #666666
  .search-content
    z-index 1 // z-index 属性设置元素的堆叠顺序,拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eeeeee
    .search-item
      line-height .62rem
      padding-left .2rem
      background #ffffff
      color #666666
</style>
