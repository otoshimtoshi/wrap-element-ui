<template>
  <ELBreadcrumb v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELBreadcrumb>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELBreadcrumb from 'element-ui/lib/breadcrumb'

export default defineComponent({
  name: 'JBreadcrumb',
  components: {
    ELBreadcrumb,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
