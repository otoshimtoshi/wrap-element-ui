<template>
  <ELLink v-bind="$attrs"></ELLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELLink from 'element-ui/lib/el-link'

export default defineComponent({
  name: 'JLink',
  components: {
    ELLink,
  },
  setup() {},
})
</script>
