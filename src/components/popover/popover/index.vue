<template>
  <ELPopover v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELPopover>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELPopover from 'element-ui/lib/popover'

export default defineComponent({
  name: 'JPopover',
  components: {
    ELPopover,
  },
  setup() {},
})
</script>
