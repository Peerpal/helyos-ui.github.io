<template>
  <div>
    <div>
      <h3 class="headline my-10">Customer Information</h3>
    </div>

    <div class="cc-form">
      <div class="flex">
        <div class="w-1/2 cc-form-control">
          <label for="cc-first-name" class="cc-label block">First name</label>
          <input type="text" id="cc-first-name" class="cc-form-control-input" placeholder="First name"/>
        </div>
        <div class="w-1/2 cc-form-control">
          <label for="cc-last-name" class="cc-label block">Last name</label>
          <input type="text" id="cc-last-name" class="cc-form-control-input" placeholder="Last name"/>
        </div>
      </div>
      <div class="block">
        <div class="w-full cc-form-control">
          <label for="cc-address" class="cc-label block">Address</label>
          <input type="text" id="cc-address" class="cc-form-control-input" placeholder="Address"/>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2 cc-form-control">
          <label for="cc-country" class="cc-label block">Country</label>
          <select name="cc-country" id="cc-country" class="cc-form-control-input">
            <option value="" data-class="cc-select-option">Country</option>
          </select>
        </div>
        <div class="w-1/2 cc-form-control">
          <label for="cc-city" class="cc-label block">Last name</label>
          <input type="text" id="cc-city" class="cc-form-control-input" placeholder="City"/>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2 cc-form-control">
          <label for="cc-postal" class="cc-label block">Postal Code</label>
          <select name="cc-postal" id="cc-postal" class="cc-form-control-input">
            <option value="">Postal Code</option>
          </select>
        </div>
        <div class="w-1/2 cc-form-control">
          <label for="cc-phone" class="cc-label block">Phone</label>
          <input type="text" id="cc-phone" class="cc-form-control-input" placeholder="Phone"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutCustomerInfo'
  }
</script>

