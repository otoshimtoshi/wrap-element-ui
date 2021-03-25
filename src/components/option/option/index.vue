<template>
  <ELOption v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELOption>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELOption from 'element-ui/lib/option'

export default defineComponent({
  name: 'JOption',
  components: {
    ELOption,
  },
  setup() {},
})
</script>
