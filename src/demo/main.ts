import { createApp } from 'vue'
import App from './App.vue'
import VueUiKit from '../index'
import '../style.css'

const app = createApp(App)
app.use(VueUiKit)
app.mount('#app')

