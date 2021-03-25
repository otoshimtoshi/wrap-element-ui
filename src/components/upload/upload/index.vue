<template>
  <ELUpload v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELUpload>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELUpload from 'element-ui/lib/upload'

export default defineComponent({
  name: 'JUpload',
  components: {
    ELUpload,
  },
  setup() {},
})
</script>
