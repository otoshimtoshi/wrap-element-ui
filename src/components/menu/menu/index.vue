<template>
  <ELMenu v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMenu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMenu from 'element-ui/lib/menu'

export default defineComponent({
  name: 'JMenu',
  components: {
    ELMenu,
  },
  setup() {},
})
</script>
