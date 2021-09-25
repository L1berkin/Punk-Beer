<template>
  <div class="index">
    <h1 class="index__title">Punk Beer</h1>
    <router-link to="/catalog" class="index__link">Show beer</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style lang="scss" scoped>
.index {
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 50px;
    font-size: 6em;
  }

  &__link {
    padding: 10px 15px;
    color: #000;
    font-size: 18px;
    transition: 0.5s;
    border-radius: 18px;

    &:focus {
      box-shadow: 0 0 10px -4px blue;
    }

    &:hover {
      box-shadow: 0 0 30px -5px yellow, inset 0 0 10px -5px #000;
    }

    &:active {
      box-shadow: 0 0 20px -5px yellow, inset 0 0 20px -5px #000;
    }
  }
}

</style>
