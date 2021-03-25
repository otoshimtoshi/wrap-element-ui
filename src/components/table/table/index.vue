<template>
  <ELTable v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTable>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTable from 'element-ui/lib/table'

export default defineComponent({
  name: 'JTable',
  components: {
    ELTable,
  },
  setup() {},
})
</script>
