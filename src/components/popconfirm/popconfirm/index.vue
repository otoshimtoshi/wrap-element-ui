<template>
  <ELPopconfirm v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELPopconfirm>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELPopconfirm from 'element-ui/lib/popconfirm'

export default defineComponent({
  name: 'JPopconfirm',
  components: {
    ELPopconfirm,
  },
  setup() {},
})
</script>
