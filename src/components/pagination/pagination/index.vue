<template>
  <ELPagination v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELPagination>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELPagination from 'element-ui/lib/pagination'

export default defineComponent({
  name: 'JPagination',
  components: {
    ELPagination,
  },
  setup() {},
})
</script>
