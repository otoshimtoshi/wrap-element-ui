<template>
  <ELCascaderPanel v-bind="$attrs"></ELCascaderPanel>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCascaderPanel from 'element-ui/lib/el-cascader-panel'

export default defineComponent({
  name: 'JCascaderPanel',
  components: {
    ELCascaderPanel,
  },
  setup() {},
})
</script>
