<template>
  <ELForm v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELForm>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELForm from 'element-ui/lib/form'

export default defineComponent({
  name: 'JForm',
  components: {
    ELForm,
  },
  setup() {},
})
</script>
