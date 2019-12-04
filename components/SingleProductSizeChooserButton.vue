<template>
  <div class="relative">
    <div class="rounded-lg p-0 border sizing-btn border-gray-400 flex items-center" :class="classes">
      <heylo-popup>
        <template slot-scope="props">
          <span @click.stop="props.pop()">Size: {{size}}</span>
          <span v-if="price">${{price}}</span>
        </template>
        <template slot="popup-content" slot-scope="props">
          <div class="absolute mt-16 left-0">
            <single-product-size-chooser-popup @close="props.pop()" @onPick="setPicked"/>
          </div>
        </template>
      </heylo-popup>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'SingleProductSizeChooserButton',
    props: {
      product: {
        default() {
          return {
            size: 'N/A',
            id: 1,
            price: null
          }
        }
      }
    },
    data() {
      return {
        size: this.product.size,
        price: this.product.price
      }
    },
    computed: {
      classes() {
        return {
          'btn-blue text-white': this.price
        }
      }
    },
    methods: {
      setPicked(payload) {
        this.price = payload.price
        this.size = payload.size
      }
    }
  }
</script>

<style scoped lang="scss">

  .sizing-btn {
    @apply flex whitespace-no-wrap m-2;

    span {
      @apply px-6 py-4 text-gray-600 font-normal cursor-pointer;
      transition: all .35s ease-in;

      &:not(:last-of-type) {
        @apply border-r border-gray-300;
      }
    }
  }
</style>
