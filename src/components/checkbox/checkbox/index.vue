<template>
  <ELCheckbox v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCheckbox>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCheckbox from 'element-ui/lib/checkbox'

export default defineComponent({
  name: 'JCheckbox',
  components: {
    ELCheckbox,
  },
  setup() {},
})
</script>
