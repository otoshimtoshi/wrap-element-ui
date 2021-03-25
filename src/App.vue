<template>
  <div>
    <j-alert title="success alert" type="success"></j-alert>
    <j-alert title="info alert" type="info"></j-alert>
    <j-alert title="warning alert" type="warning"></j-alert>
    <j-alert title="error alert" type="error"></j-alert>
    <j-row>
      <j-button>Default</j-button>
      <j-button type="primary">Primary</j-button>
      <j-button type="success">Success</j-button>
      <j-button type="info">Info</j-button>
      <j-button type="warning">Warning</j-button>
      <j-button type="danger">Danger</j-button>
    </j-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'App',
  setup() {},
})
</script>
