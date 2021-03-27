<template>
  <ELOptionGroup v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELOptionGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELOptionGroup from 'element-ui/lib/option-group'

export default defineComponent({
  name: 'JOptionGroup',
  components: {
    ELOptionGroup,
  },
  setup() {},
})
</script>
