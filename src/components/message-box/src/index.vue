<template>
  <ELMessageBox v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELMessageBox>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELMessageBox from 'element-ui/lib/message-box'

export default defineComponent({
  name: 'JMessageBox',
  components: {
    ELMessageBox,
  },
  setup() {},
})
</script>
