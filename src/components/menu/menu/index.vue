<template>
  <ELMenu v-bind="$attrs"></ELMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELMenu from 'element-ui/lib/el-menu'

export default defineComponent({
  name: 'JMenu',
  components: {
    ELMenu,
  },
  setup() {},
})
</script>
