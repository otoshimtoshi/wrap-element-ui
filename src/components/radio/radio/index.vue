<template>
  <ELRadio v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELRadio>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELRadio from 'element-ui/lib/radio'

export default defineComponent({
  name: 'JRadio',
  components: {
    ELRadio,
  },
  setup() {},
})
</script>
