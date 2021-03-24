<template>
  <ELTimeSelect v-bind="$attrs"></ELTimeSelect>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELTimeSelect from 'element-ui/lib/el-time-select'

export default defineComponent({
  name: 'JTimeSelect',
  components: {
    ELTimeSelect,
  },
  setup() {},
})
</script>
