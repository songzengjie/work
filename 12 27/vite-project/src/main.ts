import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '../mock'

import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus的样式
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
