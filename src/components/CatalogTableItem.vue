<template>
  <div class="card">
    <img
      v-if="item.image_url"
      class="card__image"
      :src="item.image_url"
      height="200px"
      alt="Beer Photo"
    >
    <img
      v-else
      class="card__image"
      src="../assets/images/default-beer.png"
      height="200px"
      alt="Beer Photo"
    >
    <p class="card__title">{{ item.name }}</p>
    <p class="card__description">
      {{ shortDescription }}
    </p>
    <p class="card__abv">
      ABV: <span>{{ item.abv }}</span>
    </p>
    <div class="card__footer">
      <button disabled class="card__btn">
        BUY
      </button>
      <router-link :to="`/catalog/${item.id}`" class="card__btn">
        Learn more
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogTableItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    shortDescription() {
      if (this.item.description.length > 100) {
        return `${this.item.description.slice(0, 100)}...`;
      }
      return this.item.description;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 2px solid #000;

  &__title {
    position: relative;
    width: 100%;
    margin: 30px 0 10px;
    font-size: 20px;
    font-weight: bold;
  }

  &__description {
    margin-bottom: 10px;
  }

  &__abv {
    margin: auto auto 10px 0;
    padding: 5px;
    cursor: default;
    transition: 0.3s;
    border: 1px solid #000;

    &:hover {
      color: #fff;
      background: #000;
    }

    span {
      font-weight: bold;
    }
  }

  &__footer {
    width: 100%;
  }

  &__btn {
    padding: 10px;
    margin-right: 10px;
    font-size: 15px;
    color: #000;
    transition: 0.3s;
    background: #fff;
    border: 1px solid #000;

    &[disabled] {
      cursor: default;
      color: rgb(124, 120, 120);
      background: #ccc;
      border: 1px solid rgb(124, 120, 120);

      &:hover {
        color: rgb(124, 120, 120);
        background: #ccc;
        border: 1px solid rgb(124, 120, 120);
      }

      &:focus {
        box-shadow: none;
      }
    }

    &:hover {
      color: #fff;
      background: #000;
    }

    &:active {
      color: #000;
      background: #fff;
    }

    &:focus {
      box-shadow: 0 0 10px -4px blue;
    }
  }
}
</style>
