<template>
  <ELDatePicker v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDatePicker>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDatePicker from 'element-ui/lib/date-picker'

export default defineComponent({
  name: 'JDatePicker',
  components: {
    ELDatePicker,
  },
  setup() {},
})
</script>
