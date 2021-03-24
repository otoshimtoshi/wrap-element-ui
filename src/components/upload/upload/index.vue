<template>
  <ELUpload v-bind="$attrs"></ELUpload>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELUpload from 'element-ui/lib/el-upload'

export default defineComponent({
  name: 'JUpload',
  components: {
    ELUpload,
  },
  setup() {},
})
</script>
