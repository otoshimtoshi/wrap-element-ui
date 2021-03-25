<template>
  <ELProgress v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELProgress>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELProgress from 'element-ui/lib/progress'

export default defineComponent({
  name: 'JProgress',
  components: {
    ELProgress,
  },
  setup() {},
})
</script>
