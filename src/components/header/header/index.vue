<template>
  <ELHeader v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELHeader>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELHeader from 'element-ui/lib/header'

export default defineComponent({
  name: 'JHeader',
  components: {
    ELHeader,
  },
  setup() {},
})
</script>
