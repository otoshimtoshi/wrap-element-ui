<template>
  <ELTooltip v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTooltip>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTooltip from 'element-ui/lib/tooltip'

export default defineComponent({
  name: 'JTooltip',
  components: {
    ELTooltip,
  },
  setup() {},
})
</script>
