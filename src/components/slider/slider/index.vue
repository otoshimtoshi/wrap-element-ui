<template>
  <ELSlider v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSlider>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSlider from 'element-ui/lib/slider'

export default defineComponent({
  name: 'JSlider',
  components: {
    ELSlider,
  },
  setup() {},
})
</script>
