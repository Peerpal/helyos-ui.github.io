<template>
  <div class="block w-screen">
    <div class="price-picker mx-auto relative py-16 text-center">
      <div class="xs:p-0 px-20 block">
        <div class="flex flex-col items-center ">
          <div class="headline-sm text-center">
            You pick your price
          </div>
        </div>
        <div class="price-calculator ">
          <div class="">
            <div class="calculator-monitor">
              <span class="monitor-currency">$</span>
              <div class="">
                <label for="monitor-value" class="hidden">Value: {{priceValue}}</label>
                <input type="text" class="monitor-input" id="monitor-value" v-model="priceValue" placeholder="450"/>
              </div>
            </div>
            <div class="calculator-keys">
              <div class="calculator-key text-center" :title="`key: ${i}`" @click.stop="appendKeyValue(i)"
                   v-for="i in 9"
                   :key="`price-value-${i}`">{{i}}
              </div>
              <div class="calculator-key text-center" title="key: null">.</div>
              <div class="calculator-key text-center" title="key: 0" @click.stop="appendKeyValue(0)">0</div>
              <div class="calculator-key text-center" title="key: backspace" @click="backspaceKey">
                <svg class="hicon" aria-hidden="true">
                  <use xlink:href="#icon-delete-copy"></use>
                </svg>
                Backspace
              </div>
            </div>
          </div>
        </div>
        <p class="text-sm px-3">
          By confirming, you agree to pay the price above
        </p>
        <div class="flex mx-4 btn btn-blue p-3 justify-center my-3">
          <svg class="hicon mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.086 2.06702L5.27032 8.50023V18.1501C5.27032 27.0761 11.5917 35.4232 20.086 37.4497C28.5804 35.4232 34.9017 27.0761 34.9017 18.1501V8.50023L20.086 2.06702ZM31.6097 18.1502C31.6097 25.4197 26.7041 32.1263 20.0864 34.1206C13.4687 32.1263 8.56308 25.4197 8.56308 18.1502V10.5911L20.0864 5.5893L31.6097 10.5911V18.1502ZM12.5302 19.099L10.2091 21.3667L16.7938 27.8L29.9634 14.9335L27.6422 12.6497L16.7938 23.2485L12.5302 19.099Z"
                  fill="white"/>
          </svg>
          Confirm Price
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleProductPricePicker',
    data() {
      return {
        priceValue: ''
      }
    },
    methods: {
      appendKeyValue(key) {
        if (key != 0) {
          this.priceValue += String(key)
        } else if (this.priceValue.length) {
          this.priceValue += String(key)
        }
      },
      backspaceKey() {
        this.priceValue = this.priceValue.split('').splice(0, this.priceValue.length - 1).join('')
      }
    }
  }
</script>

<style scoped lang="scss">
  .price-picker {
    margin: 0 auto;
    height: 100vh;
    background: #FFFFFF;
    max-width: 750px;

    .price-calculator {
      @apply p-0 block w-auto relative mb-4 border-b border-h-300 mt-4;
      .calculator-monitor {
        height: 98.97px;
        @apply relative block text-center;
        .monitor-currency {
          position: absolute;
          width: 27.91px;
          height: 55.83px;
          font-style: normal;
          font-weight: 300;
          font-size: 35.6783px;
          line-height: 56px;
          top: 0;
          margin-top: -5px;
          color: #C4C4C4;
          z-index: 10;
          left: 10px;
        }

        .monitor-input {
          position: absolute;
          font-style: normal;
          font-weight: 300;
          line-height: 0;
          color: #C4C4C4;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 55.2059px;
          padding: 0 20px;
          @apply text-center whitespace-normal w-full;
        }
      }

      .calculator-keys {
        @apply flex flex-wrap w-full justify-center;
        .calculator-key {
          position: relative;
          display: block;

          &:not(:nth-of-type(3n)) {
            @apply border-r ;
          }

          font-style: normal;
          font-weight: normal;
          font-size: 22.8392px;
          line-height: 28px;
          color: #000000;
          @apply border-h-300 flex flex-col items-center justify-center w-1/3 px-4 py-6 border-t bg-white cursor-pointer;
          &:hover {
            @apply bg-h-100
            }
        }
      }

      @apply relative;
    }
  }
</style>
