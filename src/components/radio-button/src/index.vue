<template>
  <ELRadioButton v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELRadioButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELRadioButton from 'element-ui/lib/radio-button'

export default defineComponent({
  name: 'JRadioButton',
  components: {
    ELRadioButton,
  },
  setup() {},
})
</script>
