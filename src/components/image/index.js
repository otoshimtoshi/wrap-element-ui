import Component from './image'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
