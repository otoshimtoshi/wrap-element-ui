<template>
  <ELMenuItem v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMenuItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMenuItem from 'element-ui/lib/menu-item'

export default defineComponent({
  name: 'JMenuItem',
  components: {
    ELMenuItem,
  },
  setup() {},
})
</script>
