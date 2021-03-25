<template>
  <ELCollapse v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCollapse>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCollapse from 'element-ui/lib/collapse'

export default defineComponent({
  name: 'JCollapse',
  components: {
    ELCollapse,
  },
  setup() {},
})
</script>
