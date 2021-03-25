<template>
  <ELDivider v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDivider>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDivider from 'element-ui/lib/divider'

export default defineComponent({
  name: 'JDivider',
  components: {
    ELDivider,
  },
  setup() {},
})
</script>
