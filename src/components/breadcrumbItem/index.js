import Component from './breadcrumbItem'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
