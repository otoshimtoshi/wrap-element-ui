<template>
  <ELTag v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTag>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTag from 'element-ui/lib/tag'

export default defineComponent({
  name: 'JTag',
  components: {
    ELTag,
  },
  setup() {},
})
</script>
