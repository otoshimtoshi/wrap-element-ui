<template>
  <ELButton v-bind="$attrs"><slot /></ELButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELButton from 'element-ui/lib/el-button'

export default defineComponent({
  name: 'JButton',
  components: {
    ELButton,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
