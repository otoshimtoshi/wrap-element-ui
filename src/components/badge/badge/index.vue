<template>
  <ELBadge v-bind="$attrs" v-on="$listeners"></ELBadge>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELBadge from 'element-ui/lib/badge'

export default defineComponent({
  name: 'JBadge',
  components: {
    ELBadge,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
