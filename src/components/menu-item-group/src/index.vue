<template>
  <ELMenuItemGroup v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMenuItemGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMenuItemGroup from 'element-ui/lib/menu-item-group'

export default defineComponent({
  name: 'JMenuItemGroup',
  components: {
    ELMenuItemGroup,
  },
  setup() {},
})
</script>
