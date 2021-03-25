<template>
  <ELLink v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELLink from 'element-ui/lib/link'

export default defineComponent({
  name: 'JLink',
  components: {
    ELLink,
  },
  setup() {},
})
</script>
