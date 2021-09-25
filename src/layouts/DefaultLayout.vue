<template>
  <div class="layout">
    <div class="layout-content">
      <main-header />
      <main class="layout-main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';

export default {
  name: 'DefaultLayout',
  components: { MainHeader },
};
</script>

<style lang="scss" scoped>
.layout {
  &-main {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 40px 40px 0;
  }
}
</style>
