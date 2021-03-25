<template>
  <ELTransfer v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTransfer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTransfer from 'element-ui/lib/transfer'

export default defineComponent({
  name: 'JTransfer',
  components: {
    ELTransfer,
  },
  setup() {},
})
</script>
