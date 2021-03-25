<template>
  <ELTimeline v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTimeline>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTimeline from 'element-ui/lib/timeline'

export default defineComponent({
  name: 'JTimeline',
  components: {
    ELTimeline,
  },
  setup() {},
})
</script>
