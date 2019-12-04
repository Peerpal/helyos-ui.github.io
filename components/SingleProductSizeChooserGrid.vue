<template>
  <div class="sizes flex flex-wrap cursor-pointer">
    <div class="size" v-for="size in sizes" @click="pickSize(size)">
      <div class="size-meta">
        <div class="headline" :title="size.name">{{size.name}}</div>
        <i v-if="showPrice" :title="size.price" class="price -mt-4 mb-3">{{size.price}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleProductSizeChooserGrid',
    props: {
      withPrice: {
        default: true,
        required: false
      }
    },
    data() {
      return {
        showPrice: this.withPrice || false,
        /*Put all the sizes here*/
        sizes: [
          {
            name: 'US 6',
            price: '40.45',
            value: 'M'
          },
          {
            name: 'US 6',
            price: '50.25',
            value: 'M'
          },
          {
            name: 'US 5',
            price: '20.45',
            value: 'S'
          },
          {
            name: 'US 6',
            price: '40.45',
            value: 'M'
          },
          {
            name: 'US 7',
            price: '20.45',
            value: 'L'
          }, {
            name: 'US 7.5',
            price: '35.45',
            value: 'XL'
          },
          {
            name: 'US 7',
            price: '40.45',
            value: 'XL'
          }, {
            name: 'US 7.5',
            price: '70.45',
            value: 'L'
          }
        ],
        /*This is the payload for the size picked*/
        pick: {
          size: null,
          price: null
        }
      }
    },
    methods: {
      pickSize(payload) {
        this.setPrice(payload.price)
        this.setSize(payload.value)
        this.$emit('onPick', this.pick)
      },
      setPrice(value) {
        this.pick.price = value
      }, setSize(value) {
        this.pick.size = value
      }
    }
  }
</script>

<style scoped lang="scss">
  .sizes {

    .size {
      position: relative;
      display: block;

      .size-meta {
        @apply p-2 flex flex-col items-center w-full;
        .headline {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 42px;
          color: #000000;
          width: 100%;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          text-align: center;
        }

        .price {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          color: #0000FF;
        }
      }

      &:not(:nth-of-type(4n)) {
        @apply border-r ;
      }

      &:hover {
        @apply bg-h-100;
      }

      @apply flex flex-col items-center w-1/4 p-1 border-b;
    }
  }
</style>
