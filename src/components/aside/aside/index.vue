<template>
  <ELAside v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELAside>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELAside from 'element-ui/lib/aside'

export default defineComponent({
  name: 'JAside',
  components: {
    ELAside,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
