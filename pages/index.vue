<template>
  <div>
    <div class="block">
      <p class="title">Insomnia Video Converter</p>
    </div>
    <div class="block">
      <p class="subtitle">-</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useWS} from '#imports';

export default defineComponent({
  head() {
    return {
      title: 'Insomnia Video Converter',
    };
  },
  mounted() {
    useWS();
  }
});
</script>
