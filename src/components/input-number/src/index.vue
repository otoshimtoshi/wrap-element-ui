<template>
  <ELInputNumber v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELInputNumber>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELInputNumber from 'element-ui/lib/input-number'

export default defineComponent({
  name: 'JInputNumber',
  components: {
    ELInputNumber,
  },
  setup() {},
})
</script>
