<template>
  <div>
    <div class="btn px-12 py-4 btn-blue flex items-center m-2" @click.stop="onPay">
      <svg class="hicon mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20.086 2.06702L5.27032 8.50023V18.1501C5.27032 27.0761 11.5917 35.4232 20.086 37.4497C28.5804 35.4232 34.9017 27.0761 34.9017 18.1501V8.50023L20.086 2.06702ZM31.6097 18.1502C31.6097 25.4197 26.7041 32.1263 20.0864 34.1206C13.4687 32.1263 8.56308 25.4197 8.56308 18.1502V10.5911L20.0864 5.5893L31.6097 10.5911V18.1502ZM12.5302 19.099L10.2091 21.3667L16.7938 27.8L29.9634 14.9335L27.6422 12.6497L16.7938 23.2485L12.5302 19.099Z"
              fill="white"/>
      </svg>
      Pay
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaymentButton',
    methods: {
      onPay() {
        this.$emit('onPay')
      }
    }
  }
</script>

<style scoped>

</style>
