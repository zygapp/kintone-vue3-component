import { createApp } from 'vue'
import App from './App.vue'
import KintoneVueComponent from '../src/index'
import '../src/css/style.css'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
