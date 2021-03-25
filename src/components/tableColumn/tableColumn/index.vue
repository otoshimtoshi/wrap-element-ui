<template>
  <ELTableColumn v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTableColumn>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTableColumn from 'element-ui/lib/table-column'

export default defineComponent({
  name: 'JTableColumn',
  components: {
    ELTableColumn,
  },
  setup() {},
})
</script>
