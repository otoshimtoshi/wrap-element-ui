<template>
  <ELSubmenu v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSubmenu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSubmenu from 'element-ui/lib/submenu'

export default defineComponent({
  name: 'JSubmenu',
  components: {
    ELSubmenu,
  },
  setup() {},
})
</script>
