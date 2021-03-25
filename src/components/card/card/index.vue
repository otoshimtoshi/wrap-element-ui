<template>
  <ELCard v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCard>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCard from 'element-ui/lib/card'

export default defineComponent({
  name: 'JCard',
  components: {
    ELCard,
  },
  setup() {},
})
</script>
