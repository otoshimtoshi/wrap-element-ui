import Component from './spinner'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
