<template>
  <div class="catalog">
    <h2 class="catalog__title">Catalog</h2>
    <catalog-filter
      @filter="checkParams"
    />
    <base-loader v-if="loading" />
    <catalog-table
      v-else-if="!loading && beer.length"
      :beer="beer"
    />
    <p v-else class="catalog__not-found">Not found :(</p>
    <pagination-bar
      v-if="!loading && beer.length"
      :currentPage="page"
      :disableNextBtn="beer.length < beerCount"
      @next="changePage('next')"
      @back="changePage('back')"
    />
  </div>
</template>

<script>
import GetBear from '../../api/GetBeer';
import CatalogFilter from '../components/CatalogFilter.vue';
import CatalogTable from '../components/CatalogTable.vue';
import PaginationBar from '../components/PaginationBar.vue';
import BaseLoader from '../components/BaseLoader.vue';

export default {
  name: 'Catalog',
  components: {
    BaseLoader, PaginationBar, CatalogTable, CatalogFilter,
  },
  data() {
    return {
      beerCount: 20,
      page: 1,
      beer: [],
      loading: true,
    };
  },
  computed: {
    queryParams() {
      return this.$route.query;
    },
  },
  async mounted() {
    this.beer = await this.getBeer(this.queryParams);
  },
  watch: {
    async page() {
      this.beer = await this.getBeer();
    },
  },
  methods: {
    checkParams(params = {}) {
      if (this.isEqual(params, this.queryParams)) return;
      this.setQueryParams(params);
    },
    async setQueryParams(params = {}) {
      if (!Object.keys(params).length) {
        await this.$router.push({ name: 'Catalog', query: {} });
      } else {
        await this.$router.push({ name: 'Catalog', query: { ...params } });
      }
      this.beer = await this.getBeer(this.queryParams);
    },
    async getBeer(params = {}) {
      this.loading = true;
      try {
        const defaultParams = {
          page: this.page,
          per_page: this.beerCount,
        };
        return await new GetBear().send({ ...defaultParams, ...params });
      } catch (err) {
        return [];
      } finally {
        this.loading = false;
      }
    },
    isEqual(object1 = {}, object2 = {}) {
      const props1 = Object.getOwnPropertyNames(object1);
      const props2 = Object.getOwnPropertyNames(object2);

      if (props1.length !== props2.length) {
        return false;
      }

      for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];

        if (object1[prop] !== object2[prop]) {
          return false;
        }
      }

      return true;
    },
    changePage(params) {
      if (params === 'next' && this.beer.length === this.beerCount) {
        this.page += 1;
      } else if (params === 'back' && this.page > 1) {
        this.page -= 1;
      } else if (typeof params === 'number') {
        this.page += params;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__title {
    text-align: center;
    font-size: 40px;
  }

  &__not-found {
    text-align: center;
  }
}
</style>
