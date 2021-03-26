<template>
  <ELMessage v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMessage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMessage from 'element-ui/lib/message'

export default defineComponent({
  name: 'JMessage',
  components: {
    ELMessage,
  },
  setup() {},
})
</script>
