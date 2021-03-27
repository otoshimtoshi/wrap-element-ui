<template>
  <ELCarouselItem v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCarouselItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCarouselItem from 'element-ui/lib/carousel-item'

export default defineComponent({
  name: 'JCarouselItem',
  components: {
    ELCarouselItem,
  },
  setup() {},
})
</script>
