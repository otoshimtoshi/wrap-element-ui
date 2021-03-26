<template>
  <ELNotification v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELNotification>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELNotification from 'element-ui/lib/notification'

export default defineComponent({
  name: 'JNotification',
  components: {
    ELNotification,
  },
  setup() {},
})
</script>
