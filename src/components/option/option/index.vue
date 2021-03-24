<template>
  <ELOption v-bind="$attrs"></ELOption>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELOption from 'element-ui/lib/el-option'

export default defineComponent({
  name: 'JOption',
  components: {
    ELOption,
  },
  setup() {},
})
</script>
