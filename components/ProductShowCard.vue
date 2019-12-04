<template>
  <div class="product-card">
    <div class="product-show-card-inner">
      <div class="product-price">
        {{product.price}}
      </div>
      <figure class="product-card-thumb">
        <img class="h-image" src="@/assets/images/shoe2.png"
             alt="Adidas shoe">
      </figure>
      <div class="product-meta">
        <p class="title font-semibold font-sans leading-normal text-base">{{product.name}}</p>
      </div>
    </div>
    <nuxt-link class="absolute w-full h-full left-0 top-0"
               :to="{name: product.route, params: {'id': product.id}}"></nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        default() {
          return {
            id: 1,
            price: '$450.00',
            thumb: '@/assets/images/shoe1.png',
            name: 'Adidasx Nice Kicks Ultra Boost',
            route: 'product-id'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .product-card {
    @apply w-full my-3 relative block overflow-hidden;
    &:hover {
      .product-show-card-inner {
        @apply border-h-300 shadow-lg;
      }
    }

    .product-price {
      @apply justify-end flex text-h-300 p-2 font-semibold;
    }

    .product-show-card-inner {
      @apply border rounded bg-white border-h-100 mx-3 p-3 rounded-lg;
      transition: all .35s ease-in-out;
    }

    .product-card-thumb {
      width: 100%;
      overflow: hidden;
      position: relative;
      @apply bg-white flex justify-center text-gray-400 object-center object-cover;
      img {
        top: 0;
        width: 70%;
        left: 0;
        height: 100%;
        @apply flex justify-center items-center;
      }
    }

    .product-meta {
      @apply text-xs text-black text-center px-2 py-4 font-body;
    }
  }
</style>
