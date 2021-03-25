<template>
  <ELMain v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMain>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMain from 'element-ui/lib/main'

export default defineComponent({
  name: 'JMain',
  components: {
    ELMain,
  },
  setup() {},
})
</script>
