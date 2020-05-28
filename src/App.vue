<template>
  <div id="app">
    <!-- keep-alive 路由中的内容被加载一次之后就放入内存，下次再进入此路由直接从内存中调用 -->
    <keep-alive exclude="Detail">
      <!-- exclude="组件name"不缓存该组件 -->
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
