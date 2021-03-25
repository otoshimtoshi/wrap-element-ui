<template>
  <ELRate v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELRate>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELRate from 'element-ui/lib/rate'

export default defineComponent({
  name: 'JRate',
  components: {
    ELRate,
  },
  setup() {},
})
</script>
