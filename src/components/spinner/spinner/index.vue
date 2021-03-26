<template>
  <ELSpinner v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSpinner>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSpinner from 'element-ui/lib/spinner'

export default defineComponent({
  name: 'JSpinner',
  components: {
    ELSpinner,
  },
  setup() {},
})
</script>
