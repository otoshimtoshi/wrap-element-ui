import Component from './carousel'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
