import Component from './notification'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
