import Component from './option'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
