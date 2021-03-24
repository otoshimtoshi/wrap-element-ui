<template>
  <ELSteps v-bind="$attrs"></ELSteps>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELSteps from 'element-ui/lib/el-steps'

export default defineComponent({
  name: 'JSteps',
  components: {
    ELSteps,
  },
  setup() {},
})
</script>
