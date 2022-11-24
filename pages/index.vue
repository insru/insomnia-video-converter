<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="block">
      <p class="title">Insomnia Video Converter</p>
    </div>
    <div class="block">
      <p class="subtitle">Internal <a href="https://www.insomniafest.ru/">festival</a> service for content audio and
        video normalization.</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useWS} from '#imports';
import {useHead} from '#head';

export default defineComponent({
  setup() {
    useHead({title: 'Insomnia Video Converter'});
  },
  mounted() {
    useWS();
  }
});
</script>
