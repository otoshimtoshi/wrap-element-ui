<template>
  <ELAlert v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELAlert>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELAlert from 'element-ui/lib/alert'

export default defineComponent({
  name: 'JAlert',
  components: {
    ELAlert,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
