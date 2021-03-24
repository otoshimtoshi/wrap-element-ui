<template>
  <ELTooltip v-bind="$attrs"></ELTooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELTooltip from 'element-ui/lib/el-tooltip'

export default defineComponent({
  name: 'JTooltip',
  components: {
    ELTooltip,
  },
  setup() {},
})
</script>
