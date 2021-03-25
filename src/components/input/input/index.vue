<template>
  <ELInput v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELInput>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELInput from 'element-ui/lib/input'

export default defineComponent({
  name: 'JInput',
  components: {
    ELInput,
  },
  setup() {},
})
</script>
