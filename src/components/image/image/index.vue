<template>
  <ELImage v-bind="$attrs"></ELImage>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELImage from 'element-ui/lib/el-image'

export default defineComponent({
  name: 'JImage',
  components: {
    ELImage,
  },
  setup() {},
})
</script>
