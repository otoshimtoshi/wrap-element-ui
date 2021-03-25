<template>
  <ELRow v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELRow>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELRow from 'element-ui/lib/row'

export default defineComponent({
  name: 'JRow',
  components: {
    ELRow,
  },
  setup() {},
})
</script>
