import '@/style.scss';
import * as components from './components';
import type { App, Plugin } from 'vue'

const KintoneVueComponent: Plugin = {
  install: (app: App) => {
    for (const componentName in components) {
      const component = (components as Record<string, any>)[componentName]
      app.component(component.name || componentName, component)
    }
  }
}

export default KintoneVueComponent
export * from './components'
