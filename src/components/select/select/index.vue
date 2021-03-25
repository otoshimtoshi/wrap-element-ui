<template>
  <ELSelect v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELSelect>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELSelect from 'element-ui/lib/select'

export default defineComponent({
  name: 'JSelect',
  components: {
    ELSelect,
  },
  setup() {},
})
</script>
