<template>
  <div class="help">
    <h2 class="help__title">
      Sorry, but we don't support anyone :(
    </h2>
    <img class="help__icon" src="../assets/svg/help-icon.svg" alt="поддержка">
  </div>
</template>

<script>
export default {
  name: 'Help',
};
</script>

<style lang="scss" scoped>
.help {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 50px;
  }

  &__icon {
    width: 80px;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 0 10px -5px #000;
  }
}
</style>
