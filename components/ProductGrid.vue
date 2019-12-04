<template>
  <div class="product-listing">
    <div class="list-grid" v-for="i in 16">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductGrid'
  }
</script>
<style lang="scss" scoped>
  .product-listing {
    @apply flex flex-wrap mb-4 font-sans justify-center;

    .load-more {
      @apply flex justify-center w-screen my-12;
      button {
        @apply rounded-full border border-black w-24 h-24 p-2  font-semibold font-sans leading-normal overflow-hidden  text-black
        }
    }
  }

  .list-grid {
    @apply w-1/4;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .product-listing {
      .list-grid {
        @apply w-1/3;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .product-listing {
      .list-grid {
        @apply w-3/6;
      }
    }
  }

  @media (max-width: 767px) {
    .product-listing {
      .list-grid {
        @apply w-11/12;
      }
    }
  }
</style>
