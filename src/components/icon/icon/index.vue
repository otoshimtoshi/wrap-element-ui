<template>
  <ELIcon v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELIcon>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELIcon from 'element-ui/lib/icon'

export default defineComponent({
  name: 'JIcon',
  components: {
    ELIcon,
  },
  setup() {},
})
</script>
