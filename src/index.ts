import './style.scss';
import * as components from './components';
import type { App, Plugin, Component } from 'vue'

const KintoneVueComponent: Plugin = {
  install(app: App) {
    Object.entries(components).forEach(([componentName, component]) => {
      const vueComponent = component as Component
      app.component(vueComponent.name || componentName, vueComponent)
    })
  }
}

export default KintoneVueComponent
export * from './components'
