import Component from './step'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
