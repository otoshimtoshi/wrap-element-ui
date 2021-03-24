<template>
  <ELStep v-bind="$attrs"></ELStep>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELStep from 'element-ui/lib/el-step'

export default defineComponent({
  name: 'JStep',
  components: {
    ELStep,
  },
  setup() {},
})
</script>
