<template>
  <ELCard v-bind="$attrs"></ELCard>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCard from 'element-ui/lib/el-card'

export default defineComponent({
  name: 'JCard',
  components: {
    ELCard,
  },
  setup() {},
})
</script>
