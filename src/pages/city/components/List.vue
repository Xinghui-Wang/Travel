<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="elem => elems[key] = elem"
      >
        <div class="title border-topbottom">{{key}}</div>
          <ul class="item-list">
            <li
              class="item border-bottom"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'
import BScroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  setup (props) {
    const store = useStore()
    const router = useRouter( )
    const currentCity = store.state.city

    function handleCityClick (city) {
      store.commit('changeCity', city)
      router.push('/')
    }

    const elems = ref({})
    const scroll = null
    watch (() => props.letter, (letter, prevLetter) => {
      if (letter && scroll) {
        const element = elems.value[letter]
        scroll.scrollToElement(element)
      }
    })
    const wrapper = ref(null) // 固定写法，与ref="wrapper" 自动绑定，仅在ref写死的情况下可用
    onMounted (() => {
      scroll = new BScroll(wrapper.value, {
        click: true
      })
    })
    return { currentCity, elems, wrapper, handleCityClick }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eeeeee
      padding-left .2rem
      font-size .26rem
      color #666666
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #cccccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
