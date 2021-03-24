<template>
  <ELPopconfirm v-bind="$attrs"></ELPopconfirm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELPopconfirm from 'element-ui/lib/el-popconfirm'

export default defineComponent({
  name: 'JPopconfirm',
  components: {
    ELPopconfirm,
  },
  setup() {},
})
</script>
