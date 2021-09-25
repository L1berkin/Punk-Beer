<template>
  <div class="catalog-table">
    <catalog-table-item
      v-for="el in beer"
      :key="el.id"
      :item="el"
    />
  </div>
</template>

<script>
import CatalogTableItem from './CatalogTableItem.vue';

export default {
  name: 'CatalogTable',
  components: { CatalogTableItem },
  props: {
    beer: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px
}

@media screen and (max-width: 1090px) {
  .catalog-table {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 840px) {
  .catalog-table {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 580px) {
  .catalog-table {
    grid-template-columns: 1fr;
  }
}
</style>
