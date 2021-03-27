<template>
  <ELCheckboxButton v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCheckboxButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCheckboxButton from 'element-ui/lib/checkbox-button'

export default defineComponent({
  name: 'JCheckboxButton',
  components: {
    ELCheckboxButton,
  },
  setup() {},
})
</script>
