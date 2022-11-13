<template>
  <button :class="type"
          class="button"
          @click="click()">
              <span :class="icon" class="icon mdi">
              </span>
    <span v-if="!noText"><slot/></span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from '#imports';

let id = 0;

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true
    },
    noText: {
      type: Boolean,
      required: false
    }
  },
  data(): { type: string } {
    return {
      type: ''
    };
  },
  emits: ['click'],
  mounted() {
    this.type = this.$el.className;
    id++;
  },
  methods: {
    click(): void {
      this.$emit('click');
    }
  }
});
</script>

<style lang="scss">
@import "@mdi/font";
</style>
