import Component from './divider'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
