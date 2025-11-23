import { createApp } from 'vue'
import App from './App.vue'
import VueUiKit from '../index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '../style.css'

const app = createApp(App)
app.use(Antd)
app.use(VueUiKit)
app.mount('#app')

