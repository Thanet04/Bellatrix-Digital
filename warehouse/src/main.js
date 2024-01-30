import './assets/main.css'
import Navber from './components/Navber.vue'
import Createproduct from './components/Createproduct.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('Navber',Navber)
app.component('Create',Createproduct)