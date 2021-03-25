<template>
  <ELAutocomplete v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELAutocomplete>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELAutocomplete from 'element-ui/lib/autocomplete'

export default defineComponent({
  name: 'JAutocomplete',
  components: {
    ELAutocomplete,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
