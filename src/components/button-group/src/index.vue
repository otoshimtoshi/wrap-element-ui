<template>
  <ELButtonGroup v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELButtonGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELButtonGroup from 'element-ui/lib/button-group'

export default defineComponent({
  name: 'JButtonGroup',
  components: {
    ELButtonGroup,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
