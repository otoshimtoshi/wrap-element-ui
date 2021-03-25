<template>
  <ELTimelineItem v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTimelineItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTimelineItem from 'element-ui/lib/timeline-item'

export default defineComponent({
  name: 'JTimelineItem',
  components: {
    ELTimelineItem,
  },
  setup() {},
})
</script>
