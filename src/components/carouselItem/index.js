import Component from './carouselItem'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component
