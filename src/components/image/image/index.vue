<template>
  <ELImage v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELImage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELImage from 'element-ui/lib/image'

export default defineComponent({
  name: 'JImage',
  components: {
    ELImage,
  },
  setup() {},
})
</script>
