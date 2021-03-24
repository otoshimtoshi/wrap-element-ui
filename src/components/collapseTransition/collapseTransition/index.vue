<template>
  <ELCollapseTransition v-bind="$attrs"></ELCollapseTransition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCollapseTransition from 'element-ui/lib/el-collapse-transition'

export default defineComponent({
  name: 'JCollapseTransition',
  components: {
    ELCollapseTransition,
  },
  setup() {},
})
</script>
