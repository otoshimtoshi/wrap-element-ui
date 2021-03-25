<template>
  <ELTabs v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTabs>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTabs from 'element-ui/lib/tabs'

export default defineComponent({
  name: 'JTabs',
  components: {
    ELTabs,
  },
  setup() {},
})
</script>
