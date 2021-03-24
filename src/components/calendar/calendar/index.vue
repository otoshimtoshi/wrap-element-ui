<template>
  <ELCalendar v-bind="$attrs"></ELCalendar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCalendar from 'element-ui/lib/el-calendar'

export default defineComponent({
  name: 'JCalendar',
  components: {
    ELCalendar,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
