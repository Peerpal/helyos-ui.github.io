<template>
  <div class="static">
    <div class="product-like-card ">
      <nuxt-link :to="{name: product.route}">
        <div class="product-like-card-inner">
          <div class="product-locker z-100">
            <!--Help tip svg icon-->
            <tip-popup>
            <span>
              <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.9336 11.8333H23.0833V17.4999H28.75V11.8333H31.5833V6.16661H16.9336C15.5536 2.26356 11.5625 -0.077695 7.48231 0.622355C3.40212 1.3224 0.419678 4.86013 0.419678 8.99994C0.419678 13.1398 3.40212 16.6775 7.48231 17.3775C11.5625 18.0776 15.5536 15.7363 16.9336 11.8333ZM11.7499 8.99997C11.7499 10.5648 10.4814 11.8333 8.91657 11.8333C7.35177 11.8333 6.08324 10.5648 6.08324 8.99997C6.08324 7.43516 7.35177 6.16664 8.91657 6.16664C10.4814 6.16664 11.7499 7.43516 11.7499 8.99997Z"
                      fill="#C4C4C4"/>
              </svg>
            </span>
              <div slot="content">
                <div class="helptip ">
                  <div class="flex items-center m-2">
                  <span>
                    <svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="106" height="106" rx="30" fill="url(#paint0_linear)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M54.3397 59.0832H66.4583V70.2499H77.6249V59.0832H83.2083V47.9165H54.3397C51.6204 40.2252 43.7555 35.6116 35.7151 36.9911C27.6748 38.3706 21.7976 45.342 21.7976 53.4999C21.7976 61.6577 27.6748 68.6291 35.7151 70.0086C43.7555 71.3881 51.6204 66.7745 54.3397 59.0832ZM44.1248 53.4999C44.1248 56.5835 41.625 59.0832 38.5415 59.0832C35.4579 59.0832 32.9581 56.5835 32.9581 53.4999C32.9581 50.4163 35.4579 47.9166 38.5415 47.9166C41.625 47.9166 44.1248 50.4163 44.1248 53.4999Z"
                          fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="-28.1708" y1="48.4975" x2="48.2466" y2="131.258"
                                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE66A"/>
                    <stop offset="0.921875" stop-color="#FFD60C"/>
                    </linearGradient>
                    </defs>
                    </svg>

                  </span>
                    <div class="headline-lg font-bold ml-3">The Keys</div>
                  </div>
                  <div class="p-2">
                    If the key turns gold you’ll win that pair in that size for FREE. Check everyday to make sure you
                    don’t miss out. You’ll have an entire 24 hours to cop before the offer disappears
                  </div>
                </div>
              </div>
            </tip-popup>
          </div>
          <figure class="product-card-thumb">
            <img class="h-image" src="@/assets/images/shoe2.png"
                 alt="Adidas shoe">
          </figure>
          <div class="product-meta flex">
            <p class="title font-semibold font-sans leading-normal text-base">{{product.name}}</p>
            <div class="flex-1 mx-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM5 11V9H15V11H5Z"
                      fill="black"/>
              </svg>
            </div>
          </div>
          <div class="product-price">
            {{product.price}}
          </div>


        </div>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        default() {
          return {
            id: '',
            price: 'US 450.00',
            thumb: '@/assets/images/shoe1.png',
            name: 'Adidasx Nice Kicks Ultra Boost',
            route: 'product'
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .product-like-card {
    @apply w-full bg-white my-4 relative border border-transparent;
    .product-locker {
      @apply justify-end flex text-h-300 p-2 font-semibold;

    }

    .product-like-card-inner {
      @apply border rounded border-h-100 mx-4 p-3;
      transition: all .35s ease-in-out;

      &:hover {
        &:hover {
          @apply border-h-300;
        }
      }
    }

    .product-price {
      margin: 12px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }

    .product-card-thumb {
      width: 100%;
      height: 150px;
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

    .product-meta {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      /* identical to box height */
      margin: 24px 12px 12px;
      color: #C4C4C4;
    }
  }

</style>
