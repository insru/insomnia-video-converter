<template>
  <div class="field">
    <input :id="id" v-model="value" :class="type"
           :name="id"
           checked="checked"
           class="switch"
           type="checkbox">
    <label :for="id">
      <slot/>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '#imports';
import '/node_modules/bulma-switch/dist/css/bulma-switch.min.css';
import {ISwitchData} from '~/lib/types/interfaces/ISwitchData';

let id = 0;

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data(): ISwitchData {
    return {
      id: '',
      type: ''
    };
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value: boolean) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  mounted() {
    this.type = this.$el.className;
    this.id = `sw-id-${id}`;
    id++;
  }
});
</script>
