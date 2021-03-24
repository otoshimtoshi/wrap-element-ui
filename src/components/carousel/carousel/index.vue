<template>
  <ELCarousel v-bind="$attrs"></ELCarousel>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCarousel from 'element-ui/lib/el-carousel'

export default defineComponent({
  name: 'JCarousel',
  components: {
    ELCarousel,
  },
  setup() {},
})
</script>
