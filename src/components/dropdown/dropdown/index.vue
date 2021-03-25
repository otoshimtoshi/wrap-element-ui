<template>
  <ELDropdown v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDropdown>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDropdown from 'element-ui/lib/dropdown'

export default defineComponent({
  name: 'JDropdown',
  components: {
    ELDropdown,
  },
  setup() {},
})
</script>
