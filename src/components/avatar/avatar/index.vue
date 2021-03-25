<template>
  <ELAvatar v-bind="$attrs" v-on="$listeners">
    <slot />
  </ELAvatar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ELAvatar from 'element-ui/lib/avatar'

export default defineComponent({
  name: 'JAvatar',
  components: {
    ELAvatar,
  },
  inheritAttrs: false,
  setup() {},
})
</script>
