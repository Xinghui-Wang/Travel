<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
    const sightName = ref('')
    const bannerImg = ref('')
    const gallaryImgs = ref([])
    const categoryList = ref([])
    const route = useRoute()

    async function getDetailInfo () {
      let res = await axios.get('/api/detail.json', {
        params: { id: route.params.id }
      })
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        sightName.value = data.sightName
        bannerImg.value = data.bannerImg
        gallaryImgs.value = data.gallaryImgs
        categoryList.value = data.categoryList
      }
    }

    onMounted (() => {
      getDetailInfo()
    })

    return { sightName, bannerImg, gallaryImgs, categoryList }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
