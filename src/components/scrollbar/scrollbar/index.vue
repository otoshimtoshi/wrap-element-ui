<template>
  <ELScrollbar v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELScrollbar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELScrollbar from 'element-ui/lib/scrollbar'

export default defineComponent({
  name: 'JScrollbar',
  components: {
    ELScrollbar,
  },
  setup() {},
})
</script>
