import Component from './aside/index.vue'

Component.install = function(Vue) {
  Vue.Component(Component.name, Component)
}
export default Component
