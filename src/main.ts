


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import api from './api/index'
import axios from 'axios'
import vueAxios from 'vue-axios'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueAxios, axios)
app.mount('#app')
