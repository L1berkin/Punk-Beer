<template>
  <div class="error">
    <p class="error__title">Whoops, that page is gone.</p>
    <p class="error__subtitle">
      While you are here, fast your eyes upon these tantalizing popular beer.
    </p>
    <img
      class="error__image"
      src="../assets/images/beer-404.png"
      width="550px"
      height="550px"
      alt="Beer photo"
    >
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    font-size: 40px;
  }

  &__subtitle {
    margin-top: 20px;
    width: 300px;
    text-align: center;
    font-size: 15px;
    color: #9d9d9d;
  }

  &__image {
    width: 100%;
    height: 80vw;
    max-height: 550px;
    max-width: 550px;
  }
}
</style>
