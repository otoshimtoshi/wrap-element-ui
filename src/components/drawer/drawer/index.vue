<template>
  <ELDrawer v-bind="$attrs"></ELDrawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELDrawer from 'element-ui/lib/el-drawer'

export default defineComponent({
  name: 'JDrawer',
  components: {
    ELDrawer,
  },
  setup() {},
})
</script>
