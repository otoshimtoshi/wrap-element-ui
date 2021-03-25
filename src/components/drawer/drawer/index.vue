<template>
  <ELDrawer v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELDrawer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELDrawer from 'element-ui/lib/drawer'

export default defineComponent({
  name: 'JDrawer',
  components: {
    ELDrawer,
  },
  setup() {},
})
</script>
