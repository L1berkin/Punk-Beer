<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <router-link to="/" class="header__link">Punk Beer</router-link>
        </li>
        <li class="header__item">
          <router-link to="/catalog" class="header__link">Catalog</router-link>
        </li>
        <li class="header__item">
          <router-link to="/help" class="header__link">Help</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0 10px -5px #000;

  &__nav {
    width: 100%;
  }

  &__list {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  &__item {
    display: flex;
  }

  &__link {
    padding: 20px 25px;
    color: #000;

    &:hover {
      color: #fff;
      background: #000;
    }

    &:active {
      color: #ccc;
      background: rgba(0, 0, 0, 0.5);
    }

    &:focus {
      box-shadow: 0 6px 10px -8px blue;
    }
  }
}
</style>
