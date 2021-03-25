<template>
  <ELContainer v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELContainer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELContainer from 'element-ui/lib/container'

export default defineComponent({
  name: 'JContainer',
  components: {
    ELContainer,
  },
  setup() {},
})
</script>
