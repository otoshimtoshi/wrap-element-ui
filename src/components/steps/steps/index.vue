<template>
  <ELSteps v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSteps>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSteps from 'element-ui/lib/steps'

export default defineComponent({
  name: 'JSteps',
  components: {
    ELSteps,
  },
  setup() {},
})
</script>
