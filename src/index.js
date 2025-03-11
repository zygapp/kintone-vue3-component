import '@/style.scss';
// import '@/assets/button.css';
import * as components from './components';

const KintoneVueComponent = {
  install: (app) => {
    for (const componentName in components) {
      const component = components[componentName];
      app.component(component.name || componentName, component);
    }
  },
};

export default KintoneVueComponent;
export * from './components';