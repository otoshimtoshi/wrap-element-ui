<template>
  <ELBreadcrumbItem v-bind="$attrs" v-on="$listeners"></ELBreadcrumbItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELBreadcrumbItem from 'element-ui/lib/breadcrumb-item'

export default defineComponent({
  name: 'JBreadcrumbItem',
  components: {
    ELBreadcrumbItem,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
