import Component from './select'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
