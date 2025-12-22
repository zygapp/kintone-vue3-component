import { createApp } from 'vue'
import App from './App.vue'
import KintoneVueComponent from '../dist/'
import '../src/css/style.css'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
