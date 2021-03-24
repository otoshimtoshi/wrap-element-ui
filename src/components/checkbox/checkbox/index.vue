<template>
  <ELCheckbox v-bind="$attrs"></ELCheckbox>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCheckbox from 'element-ui/lib/el-checkbox'

export default defineComponent({
  name: 'JCheckbox',
  components: {
    ELCheckbox,
  },
  setup() {},
})
</script>
