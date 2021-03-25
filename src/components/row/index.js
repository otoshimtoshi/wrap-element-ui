import Component from 'element-ui/lib/row'

Component.name = Component.name.replace(/^EL/, 'J')
Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
