<template>
  <ELDropdownItem v-bind="$attrs"></ELDropdownItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDropdownItem from 'element-ui/lib/el-dropdown-item'

export default defineComponent({
  name: 'JDropdownItem',
  components: {
    ELDropdownItem,
  },
  setup() {},
})
</script>
