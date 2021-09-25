<template>
  <base-loader v-if="loading" />
  <div v-else class="catalog-item">
    <p class="catalog-item__title">{{ beer.name }}</p>
    <p v-if="beer.tagline" class="catalog-item__subtitle">{{ beer.tagline }}</p>
    <img
      v-if="beer.image_url"
      class="catalog-item__image"
      :src="beer.image_url"
      height="500px"
      alt="Beer Photo"
    >
    <img
      v-else
      class="catalog-item__image"
      src="../assets/images/default-beer.png"
      height="500px"
      alt="Beer Photo"
    >
    <div class="catalog-item__content">
      <p class="catalog-item__description">
        {{ beer.description || 'Not bad beer.' }}
      </p>
    </div>
  </div>
</template>

<script>
import GetBeer from '../../api/GetBeer';
import BaseLoader from '../components/BaseLoader.vue';

export default {
  name: 'CatalogItem',
  components: { BaseLoader },
  data() {
    return {
      beer: {},
      loading: true,
    };
  },
  mounted() {
    this.getBeer();
  },
  methods: {
    async getBeer() {
      this.loading = true;
      try {
        const res = await new GetBeer().send({
          ids: this.$route.params.id,
        });
        this.beer = res[0] || {};
      } catch (err) {
        await this.$router.push(`/${err.message}`);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 5em;
    text-align: center;
  }

  &__subtitle {
    position: relative;
    margin: 30px 0 20px;
    text-align: center;
    font-size: 15px;

    &::after {
      content: '';
      position: absolute;
      left: 102%;
      top: calc(50% - 2px);
      height: 4px;
      width: 20px;
      background: #000;
      border-radius: 2px;
    }

    &::before {
      content: '';
      position: absolute;
      right: 102%;
      top: calc(50% - 2px);
      height: 4px;
      width: 20px;
      background: #000;
      border-radius: 2px;
    }
  }

  &__description {
    margin: 20px 0 40px;
  }
}
</style>
