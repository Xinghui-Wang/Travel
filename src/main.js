import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')







