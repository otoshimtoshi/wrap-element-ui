<template>
  <ELCol v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELCol>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELCol from 'element-ui/lib/col'

export default defineComponent({
  name: 'JCol',
  components: {
    ELCol,
  },
  setup() {},
})
</script>
