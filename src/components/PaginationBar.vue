<template>
  <div class="pagination">
    <button
      class="pagination__btn"
      :disabled="currentPage === 1"
      @click="$emit('back')"
    >
      &#60;
    </button>
    <button class="pagination__btn" @click="$emit('next')" :disabled="disableNextBtn">&#62;</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationBar',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    disableNextBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  padding: 40px 0;
  display: flex;
  justify-content: center;

  &__btn {
    padding: 10px 15px;
    margin: 0 10px;
    color: #000;
    background: #fff;
    transition: 0.3s;
    border-radius: 8px;
    border: 1px solid #000;

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

      &:active {
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
  }
}
</style>
