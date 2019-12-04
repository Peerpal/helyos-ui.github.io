<template>
  <div>
    <div>
      <h3 class="headline my-10">Payment Selection</h3>
    </div>
    <div>
      <div class="cc-card">
        <div class="option">
          <div class="flex mb-4 items-center">
            <input type="radio" name="ship_method" class="mr-1" id="">
            <div class="headline w-full italic">Credit Card</div>
            <div class="flex justify-around">
              <img src="@/assets/images/credit-cards_amex.svg" class="ml-1" alt="">
              <img src="@/assets/images/credit-cards_visa.svg" class="ml-1" alt="">
              <img src="@/assets/images/credit-cards_mastercard.svg" class="ml-1" alt="">
            </div>
          </div>
          <span
            class="pl-6">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</span>
          <div>
            <div class="cc-form">
              <div class="flex">
                <div class="w-1/2 cc-form-control">
                  <label for="cc-card-number" class="cc-label block">Card Number</label>
                  <input type="text" id="cc-card-number" class="cc-form-control-input"
                         placeholder="Card number"/>
                </div>
              </div>
              <div class="flex">
                <div class="w-1/2 cc-form-control">
                  <label for="cc-card-name" class="cc-label block">Name on card</label>
                  <input type="text" id="cc-card-name" class="cc-form-control-input"
                         placeholder="Card name"/>
                </div>
                <div class="w-1/2 cc-form-control">
                  <label for="cc-card-expiration" class="cc-label block">Expiry Date</label>
                  <input type="date" placeholder="MM/YY" id="cc-card-expiration"
                         class="cc-form-control-input"/>
                </div>
                <div class="w-1/2 cc-form-control">
                  <label for="cc-card-cvv" class="cc-label block">CVV Code</label>
                  <input type="text" id="cc-card-cvv" class="cc-form-control-input"
                         placeholder="Card cvv"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutPaymentSelection'
  }
</script>

<style scoped>

</style>
