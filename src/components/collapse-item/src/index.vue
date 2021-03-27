<template>
  <ELCollapseItem v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCollapseItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCollapseItem from 'element-ui/lib/collapse-item'

export default defineComponent({
  name: 'JCollapseItem',
  components: {
    ELCollapseItem,
  },
  setup() {},
})
</script>
