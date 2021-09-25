<template>
  <div class="filter">
    <div class="filter__input-field">
      <img
        width="20px"
        height="20px"
        class="filter__search"
        src="../assets/svg/search-icon.svg"
        alt="search"
      />
      <input
        v-model.trim="value"
        placeholder="Enter the title"
        type="text"
        tabindex="1"
        class="filter__input pl-30"
        @keyup.enter="filter"
      >
    </div>
    <input
      v-model.trim="min_adv"
      placeholder="Enter min adv"
      type="number"
      tabindex="2"
      min="0"
      class="filter__input numb"
      @keyup.enter="filter"
    >
    <input
      v-model.trim="max_adv"
      placeholder="Enter max adv"
      type="number"
      tabindex="3"
      min="0"
      class="filter__input numb"
      @keyup.enter="filter"
    >
    <button class="filter__btn" tabindex="4" @click="filter">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: 'CatalogFilter',
  data() {
    return {
      value: '',
      min_adv: '',
      max_adv: '',
    };
  },
  mounted() {
    this.getParams();
  },
  methods: {
    filter() {
      const params = {};
      if (this.value) params.beer_name = this.value;
      if (this.min_adv) params.abv_gt = this.min_adv;
      if (this.max_adv) params.abv_lt = this.max_adv;
      this.$emit('filter', params);
    },
    getParams() {
      const { query } = this.$route;
      if (query.beer_name) this.value = query.beer_name;
      if (query.abv_gt) this.min_adv = query.abv_gt;
      if (query.abv_lt) this.max_adv = query.abv_lt;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  max-width: 648px;
  margin: 20px auto 50px;

  &__search {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__input-field {
    position: relative;
    flex-grow: 1;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  &__input {
    width: 100%;
    padding: 5px 10px;
    font-size: 18px;
    transition: 0.3s;
    border-radius: 8px;

    &::placeholder {
      font-size: 14px;
    }

    &:focus {
      box-shadow: 0 0 10px -4px blue;
    }
  }

  &__btn {
    font-size: 15px;
    padding: 5px 15px;
    color: #000;
    background: #fff;
    transition: 0.3s;
    border-radius: 8px;
    border: 1px solid #ccc;

    &:hover {
      background: #000;
      color: #fff;
    }

    &:active {
      background: #fff;
    }

    &:focus {
      box-shadow: 0 0 10px -4px blue;
    }
  }
}

.numb {
  width: 25%;
  border: 1px solid #ccc;
}

.pl-30 {
  padding-left: 30px;
}
</style>
