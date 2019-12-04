<template>
  <div>
    <div>
      <h3 class="headline my-10">Shipping Information</h3>
    </div>
    <div class="cc-card">
      <div class="option">
        <span>Jamy Larson</span>
        <span>Unit 2 Green Mount Retail Park</span>
        <span>Halifax</span>
        <span>HX1 5QN</span>
        <span>Tel:  0344 332 5931</span>
      </div>
    </div>

    <div>
      <h3 class="headline my-10">Shipping Method</h3>
    </div>
    <div class="flex xs:flex-wrap sm:flex-wrap">
      <div class="cc-card">
        <div class="option">
          <div class="flex mb-4 items-center">
            <label for="standard-delivery"></label>
            <input type="radio" name="ship_method" class="mr-1" id="standard-delivery">
            <div class="headline w-full">Standard Delivery</div>
            <p class="cc-label-price">Free</p>
          </div>
          <span
            class="pl-6">Estimated 14-20 Day Shipping (Duties and taxes may be due upon delivery)</span>
        </div>
      </div>
      <div class="cc-card ">
        <div class="option">
          <div class="flex mb-4 items-center">
            <label for="fast-delivery"></label>
            <input type="radio" name="ship_method" class="mr-1" id="fast-delivery">
            <div class="headline w-full">Fast Delivery</div>
            <p class="cc-label-price">$8.00</p>
          </div>
          <span class="pl-6">
                          Estimated 2-5 Days Shipping (Duties and taxes may be due upon delivery)
                        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutShippingInfo'
  }
</script>

<style scoped>

</style>
