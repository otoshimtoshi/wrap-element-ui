<template>
  <ELColorPicker v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELColorPicker>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELColorPicker from 'element-ui/lib/color-picker'

export default defineComponent({
  name: 'JColorPicker',
  components: {
    ELColorPicker,
  },
  setup() {},
})
</script>
