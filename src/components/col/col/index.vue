<template>
  <ELCol v-bind="$attrs"></ELCol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCol from 'element-ui/lib/el-col'

export default defineComponent({
  name: 'JCol',
  components: {
    ELCol,
  },
  setup() {},
})
</script>
