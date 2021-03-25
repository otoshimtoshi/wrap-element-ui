<template>
  <ELBacktop v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELBacktop>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELBacktop from 'element-ui/lib/backtop'

export default defineComponent({
  name: 'JBacktop',
  components: {
    ELBacktop,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
