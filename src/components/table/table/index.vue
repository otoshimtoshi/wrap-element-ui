<template>
  <ELTable v-bind="$attrs"></ELTable>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELTable from 'element-ui/lib/el-table'

export default defineComponent({
  name: 'JTable',
  components: {
    ELTable,
  },
  setup() {},
})
</script>
