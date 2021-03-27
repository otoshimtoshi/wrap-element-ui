<template>
  <ELRadioGroup v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELRadioGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELRadioGroup from 'element-ui/lib/radio-group'

export default defineComponent({
  name: 'JRadioGroup',
  components: {
    ELRadioGroup,
  },
  setup() {},
})
</script>
