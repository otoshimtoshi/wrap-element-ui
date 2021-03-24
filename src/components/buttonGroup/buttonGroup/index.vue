<template>
  <ELButtonGroup v-bind="$attrs"></ELButtonGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELButtonGroup from 'element-ui/lib/el-button-group'

export default defineComponent({
  name: 'JButtonGroup',
  components: {
    ELButtonGroup,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
