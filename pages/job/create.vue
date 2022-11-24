<template>
  <div>
    <div class="block">
      <p class="title">Create Job</p>
    </div>
    <div class="block">
      <p class="subtitle">-</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '#imports';
import {useHead} from '#head';

export default defineComponent({
  setup() {
    useHead({title: 'Create Job'});
  }
});
</script>
