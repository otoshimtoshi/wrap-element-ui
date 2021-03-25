<template>
  <ELCascader v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCascader>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCascader from 'element-ui/lib/cascader'

export default defineComponent({
  name: 'JCascader',
  components: {
    ELCascader,
  },
  setup() {},
})
</script>
