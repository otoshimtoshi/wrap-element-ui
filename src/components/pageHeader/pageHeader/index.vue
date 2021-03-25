<template>
  <ELPageHeader v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELPageHeader>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELPageHeader from 'element-ui/lib/page-header'

export default defineComponent({
  name: 'JPageHeader',
  components: {
    ELPageHeader,
  },
  setup() {},
})
</script>
