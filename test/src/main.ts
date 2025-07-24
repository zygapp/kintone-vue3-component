import { createApp } from 'vue'
import App from './App.vue'
import KintoneVueComponent from '@zygapp/kintone-vue3-component'
import '@zygapp/kintone-vue3-component/style.css'
// import KintoneVueComponent from '../../src/index'
// import '../../src/style.scss'

const app = createApp(App)
app.use(KintoneVueComponent)
app.mount('#app')
