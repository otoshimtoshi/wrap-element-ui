<template>
  <ELStep v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELStep>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELStep from 'element-ui/lib/step'

export default defineComponent({
  name: 'JStep',
  components: {
    ELStep,
  },
  setup() {},
})
</script>
