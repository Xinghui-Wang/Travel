import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')







