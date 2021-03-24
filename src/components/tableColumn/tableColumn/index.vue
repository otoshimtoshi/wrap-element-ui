<template>
  <ELTableColumn v-bind="$attrs"></ELTableColumn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELTableColumn from 'element-ui/lib/el-table-column'

export default defineComponent({
  name: 'JTableColumn',
  components: {
    ELTableColumn,
  },
  setup() {},
})
</script>
