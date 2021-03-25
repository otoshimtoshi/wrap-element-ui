<template>
  <ELCarousel v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCarousel>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCarousel from 'element-ui/lib/carousel'

export default defineComponent({
  name: 'JCarousel',
  components: {
    ELCarousel,
  },
  setup() {},
})
</script>
