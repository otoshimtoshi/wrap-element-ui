import Component from './checkbox'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
