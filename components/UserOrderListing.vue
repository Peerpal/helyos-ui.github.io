<template>
  <div class="container mx-auto">
    <div class="headline">
      Orders
    </div>
    <div class="result-hint">
      2 previous orders
    </div>
    <div>
      <div class="product-listing-linear border-t border-h-300">
        <div class="linear-product-card " v-for="i in 5">
          <div class="flex items-center justify-around w-full pb-4 pt-4 border-b border-h-300 ">
            <figure class="product-card-thumb">
              <img class="h-image" src="@/assets/images/shoe2.png"
                   alt="Adidas shoe">
            </figure>
            <div class="product-meta w-full lg:mx-12 sm:m-2 ">
              <span class="font-semibold block">
                Shipped: Date</span>
              <div class="hint block text-sm">
                <span>Product name</span>,
                <span>Size</span>
              </div>
              <div class="product-price font-bold my-2">
                $39.85
              </div>
              <div class="reorder-btn btn btn-sm btn-blue">
                Buy it again
              </div>
            </div>
            <div class="flex-1 flex-shrink-0 whitespace-no-wrap text-sm mx-2">
              <div class="hint">Data purchased</div>
              <div class="hint">Item #: 27439764</div>
            </div>
            <a class="absolute w-full h-full left-0 top-0" href="#"></a>
          </div>
        </div>
        <div class="load-more">
          <button>
            Load more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductLikesListing',
    props: {
      title: {
        default: 'Product'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-listing-linear {

    .hover {
      &:hover {
        @apply border-h-300;
      }
    }

    .linear-product-card {
      @apply w-full bg-gray-400 bg-white relative overflow-hidden border border-transparent relative;

      .product-price {
        font-style: normal;
        font-weight: 500;
        line-height: 1.5;
        color: #000000;
      }

      .product-card-thumb {
        width: 256px;
        overflow: hidden;
        position: relative;
        @apply bg-white flex justify-center text-gray-400 object-center object-cover;
        img {
          top: 0;
          width: 243px;
          left: 0;
          height: 100%;
          @apply flex justify-center items-center;
        }
      }

    }

    .load-more {
      @apply flex justify-center w-screen my-12;
      button {
        @apply rounded-full border border-black w-24 h-24 p-2  font-semibold font-sans leading-normal overflow-hidden  text-black
        }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .product-listing {
      .product-card {
        @apply w-1/3;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .product-listing {
      .product-card {
        @apply w-1/2;
      }
    }
  }

  @media (max-width: 768px) {
    .product-listing {
      .product-card {
        @apply w-11/12;
      }
    }
  }
</style>
