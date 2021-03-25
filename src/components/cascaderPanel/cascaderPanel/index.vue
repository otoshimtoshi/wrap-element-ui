<template>
  <ELCascaderPanel v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCascaderPanel>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCascaderPanel from 'element-ui/lib/cascader-panel'

export default defineComponent({
  name: 'JCascaderPanel',
  components: {
    ELCascaderPanel,
  },
  setup() {},
})
</script>
