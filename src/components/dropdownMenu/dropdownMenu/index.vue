<template>
  <ELDropdownMenu v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDropdownMenu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDropdownMenu from 'element-ui/lib/dropdown-menu'

export default defineComponent({
  name: 'JDropdownMenu',
  components: {
    ELDropdownMenu,
  },
  setup() {},
})
</script>
