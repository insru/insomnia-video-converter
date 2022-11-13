<template>
  <p class="menu-label">{{ categoryName }}</p>
  <ul class="menu-list">
    <router-link v-for="categoryItem in categoryItems" :to="categoryItem.path">
      <li>{{ categoryItem.text }}</li>
    </router-link>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from '#imports';
import {ICategoryItem} from '~/lib/types/interfaces/ICategoryItem';
import {PropType} from '@vue/runtime-core';

export default defineComponent({
  props: {
    categoryName: {
      type: String,
      required: true
    },
    categoryItems: {
      type: Array as PropType<Array<ICategoryItem>>,
      required: true
    }
  }
});
</script>
