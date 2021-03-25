<template>
  <ELFooter v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELFooter>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELFooter from 'element-ui/lib/footer'

export default defineComponent({
  name: 'JFooter',
  components: {
    ELFooter,
  },
  setup() {},
})
</script>
