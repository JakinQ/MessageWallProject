


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import api from './api/index'
import axios from 'axios'
import vueAxios from 'vue-axios'
import './styles/commons.less';
// import "@/assets/fonts/iconfont.css";
import "@/assets/fonts/icon/iconfont.js"
import "@/assets/pigtruman手写体.ttf"
import Particles from "particles.vue3";
import './mock/index.ts'
import { VueMasonryPlugin } from 'vue-masonry'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles)
app.use(VueMasonryPlugin)
app.use(vueAxios, axios)
app.mount('#app')
