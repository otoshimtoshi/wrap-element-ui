<template>
  <ELTabPane v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELTabPane>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELTabPane from 'element-ui/lib/tab-pane'

export default defineComponent({
  name: 'JTabPane',
  components: {
    ELTabPane,
  },
  setup() {},
})
</script>
