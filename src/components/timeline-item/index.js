import Component from './src'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
