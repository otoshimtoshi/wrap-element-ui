import Component from './tabs'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
