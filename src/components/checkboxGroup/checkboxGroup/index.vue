<template>
  <ELCheckboxGroup v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCheckboxGroup>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCheckboxGroup from 'element-ui/lib/checkbox-group'

export default defineComponent({
  name: 'JCheckboxGroup',
  components: {
    ELCheckboxGroup,
  },
  setup() {},
})
</script>
