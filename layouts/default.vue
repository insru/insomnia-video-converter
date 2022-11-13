<template>
  <div>
    <div id="nav">
      <nav-bar/>
    </div>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-3">
            <div class="box">
              <left-menu :menu-categories="menuCategories"></left-menu>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="content">
                <slot/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '#imports';
import {ILeftMenuCategory} from '~/lib/types/interfaces/ILeftMenuCategory';

export default defineComponent({
  data(): { menuCategories: Array<ILeftMenuCategory> } {
    return {
      menuCategories: [
        {
          categoryName: 'Convert Jobs',
          categoryItems: [
            {
              text: 'Home',
              path: '/'
            },
            {
              text: 'Create',
              path: '/job/create'
            },
            {
              text: 'List',
              path: '/job/all'
            },
          ]
        },
        {
          categoryName: 'Settings',
          categoryItems: [
            {
              text: 'Configure App',
              path: '/settings'
            }
          ]
        },
      ],
    };
  }
});
</script>

<style lang="scss">
@import "bulma/css/bulma.css";
</style>
