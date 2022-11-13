<template>
  <nav aria-label="main navigation" class="navbar has-shadow" role="navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img alt="Jug Ru Group" src="../assets/logo-black.png">
      </router-link>
      <a :class="{ 'is-active' : menuActive}" aria-expanded="false" aria-label="menu" class="navbar-burger"
         role="button" @click="toggleBurger()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'is-active' : menuActive}" class="navbar-menu"></div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from '#imports';

export default defineComponent({
  data(): { menuActive: boolean } {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleBurger() {
      this.menuActive = !this.menuActive;
    },
    closeBurger() {
      this.menuActive = false;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.closeBurger();
      }
    },
  }
});
</script>
