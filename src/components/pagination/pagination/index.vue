<template>
  <ELPagination v-bind="$attrs"></ELPagination>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELPagination from 'element-ui/lib/el-pagination'

export default defineComponent({
  name: 'JPagination',
  components: {
    ELPagination,
  },
  setup() {},
})
</script>
