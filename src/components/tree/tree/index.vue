<template>
  <ELTree v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTree>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTree from 'element-ui/lib/tree'

export default defineComponent({
  name: 'JTree',
  components: {
    ELTree,
  },
  setup() {},
})
</script>
