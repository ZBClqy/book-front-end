import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './message'
import './responsive'
import 'virtual:svg-icons-register'
import svgicon from './components/svg/SvgIcon.vue'


const app= createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('svgIcon',svgicon)
app.mount('#app')
