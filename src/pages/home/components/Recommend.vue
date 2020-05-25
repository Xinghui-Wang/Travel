<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">
            {{item.title}}
          </p>
          <p class="item-desc">
            {{item.desc}}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/edba950b-8ac8-4ebb-8502-b8dc8de4a85b.jpg_r_480x320x95_02b91d50.jpg',
        title: '贵阳-铜仁 2天跟团游',
        desc: '免票啦！高端纯玩♥含电瓶车，景点深度游，夜游舞阳河，梵净山/镇远古城2日游'
      }, {
        id: '002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/cd9a66fd-d1af-48fa-91e1-6dd379846b14.jpg_r_480x320x95_4bb1c220.jpg',
        title: '贵阳当地游 1天跟团游',
        desc: '免票啦♥高端纯玩，不套路，真景点，荔波小七孔深度一日游'
      }, {
        id: '003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_b2c_001/a0cd1637-2aa5-43bb-a4ce-d3fbb5c525ee.jpg_r_480x320x95_cb919e77.jpg',
        title: '贵阳-贵州 2天跟团游',
        desc: '【贵州西江千户苗寨+荔波小七孔2日游】住西江赏夜景，纯玩设计超长时间深度体验'
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
  .item
    overflow hidden
    display flex
    height 1.8rem
    .item-img
      width 2.4rem
      height 1.6rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #ffffff
</style>
