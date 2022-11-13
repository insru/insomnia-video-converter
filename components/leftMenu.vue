<template>
  <div class="menu">
    <left-menu-category v-for="menuCategory in menuCategories" :category-items="menuCategory.categoryItems"
                        :category-name="menuCategory.categoryName"></left-menu-category>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '#imports';
import {ILeftMenuCategory} from '~/lib/types/interfaces/ILeftMenuCategory';
import {PropType} from '@vue/runtime-core';

export default defineComponent({
  props: {
    menuCategories: {
      type: Array as PropType<Array<ILeftMenuCategory>>,
      required: true
    }
  }
});
</script>
