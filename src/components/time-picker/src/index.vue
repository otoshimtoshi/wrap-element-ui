<template>
  <ELTimePicker v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTimePicker>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTimePicker from 'element-ui/lib/time-picker'

export default defineComponent({
  name: 'JTimePicker',
  components: {
    ELTimePicker,
  },
  setup() {},
})
</script>
