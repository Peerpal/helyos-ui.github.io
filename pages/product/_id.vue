<template>
  <div>
    <div v-if="!ready">
      <div class="fixed left-0 w-screen top-0 h-screen z-30 bg-gray-100">
        <div class="flex flex-col items-center justify-center h-full">
          <img src="~/assets/images/loader.png" style="width: 250px" alt="">
        </div>
      </div>
    </div>
    <div v-else class="my-12">
      <single-product @onShowPaymentSidebar="showSidebar"/>
      <div class="divider"></div>
      <related-product :id="1"/>
      <transition name="slide-from-right">
        <single-product-sidebar ref="sidebar"/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Product_id',
    data() {
      return {
        ready: false,
        timeout: null
      }
    },
    created() {
      this.demoLoader()
    },
    methods: {
      demoLoader() {
        this.timeout = setTimeout(this.isReady, 3000)
      },
      isReady() {
        this.ready = true
        clearTimeout(this.timeout)
      },
      showSidebar() {
        this.$refs['sidebar'].toggleShow()
      }
    }
  }
</script>

<style scoped>

</style>
