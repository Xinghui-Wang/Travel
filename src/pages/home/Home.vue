<template>
<!-- 模版对外只能有一个标签 -->
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>

</style>
