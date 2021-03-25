<template>
  <ELCalendar v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCalendar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCalendar from 'element-ui/lib/calendar'

export default defineComponent({
  name: 'JCalendar',
  components: {
    ELCalendar,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
