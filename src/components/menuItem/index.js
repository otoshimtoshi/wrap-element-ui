import Component from './menuItem'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
