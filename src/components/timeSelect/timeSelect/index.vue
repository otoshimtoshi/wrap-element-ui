<template>
  <ELTimeSelect v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTimeSelect>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTimeSelect from 'element-ui/lib/time-select'

export default defineComponent({
  name: 'JTimeSelect',
  components: {
    ELTimeSelect,
  },
  setup() {},
})
</script>
