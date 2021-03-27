import Component from 'element-ui/lib/infinite-scroll'

Component.install = function(Vue) {
  Vue.directive(Component.name, Component)
}

export default Component
