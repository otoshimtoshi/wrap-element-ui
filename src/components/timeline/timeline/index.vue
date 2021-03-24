<template>
  <ELTimeline v-bind="$attrs"></ELTimeline>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELTimeline from 'element-ui/lib/el-timeline'

export default defineComponent({
  name: 'JTimeline',
  components: {
    ELTimeline,
  },
  setup() {},
})
</script>
