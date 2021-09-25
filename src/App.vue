<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layout || 'default-layout';
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
