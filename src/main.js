import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import KintoneVueComponent from '.'
// import KintoneVueComponent from '../dist/kintone-vue-component.es'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
