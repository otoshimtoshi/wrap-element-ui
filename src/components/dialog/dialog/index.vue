<template>
  <ELDialog v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDialog from 'element-ui/lib/dialog'

export default defineComponent({
  name: 'JDialog',
  components: {
    ELDialog,
  },
  setup() {},
})
</script>
