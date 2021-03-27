<template>
  <ELFormItem v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELFormItem>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELFormItem from 'element-ui/lib/form-item'

export default defineComponent({
  name: 'JFormItem',
  components: {
    ELFormItem,
  },
  setup() {},
})
</script>
