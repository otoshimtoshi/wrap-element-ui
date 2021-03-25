<template>
  <ELSwitch v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSwitch>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSwitch from 'element-ui/lib/switch'

export default defineComponent({
  name: 'JSwitch',
  components: {
    ELSwitch,
  },
  setup() {},
})
</script>
