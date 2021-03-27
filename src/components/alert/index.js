import { Component } from 'vue'
import Alert from './alert'

Component.install = () => {
  Vue.Component(Alert.name, Alert)
}
export default Component
