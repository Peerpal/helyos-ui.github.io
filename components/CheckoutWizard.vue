<template>
  <div class="checkout font-sans">
    <div id="cc-wizard">
      <template v-if="!thankYou">

        <div class="md:flex lg:flex relative">
          <!--Main-->
          <div class="relative lg:flex-1 md:flex-1 lg:w-4/6 md:w-4/6 w-full">
            <div class="lg:px-12 py-6">
              <form-wizard :transition="wizardOption.transition" :shape="wizardOption.shape" @on-complete="onComplete">
                <tab-content v-for="stage in stages"
                             v-if="!stage.hide"
                             :key="stage.title"
                             :title="stage.title" :ref="stage.component">
                  <div class="cc-wizard-section">
                    <component :is="stage.component"></component>
                  </div>
                </tab-content>

                <template slot="footer" slot-scope="props">
                  <div class="flex items-center flex-wrap justify-between xs:justify-center my-4">
                    <div class="sm:text-center">
                      <nuxt-link :to="{name: 'index'}">
                        <wizard-button v-if="!props.activeTabIndex && !props.isLastStep" :style="backButtonStyle">
                          <svg class="icon inline mr-2" aria-hidden="true">
                            <use xlink:href="#icon-arrow-left"></use>
                          </svg>
                          Back to shop
                        </wizard-button>
                      </nuxt-link>
                      <wizard-button @click.native="props.prevTab()" v-if="props.activeTabIndex > 0"
                                     :style="backButtonStyle">
                        <svg class="icon inline mr-2" aria-hidden="true">
                          <use xlink:href="#icon-arrow-left"></use>
                        </svg>
                        {{`Back to ${stages[props.activeTabIndex-1].title}`}}
                      </wizard-button>
                    </div>
                    <div class="sm:text-center">
                      <wizard-button @click.native="props.nextTab()" class="wizard-footer-right finish-button"
                                     :style="baseButtonStyle">{{props.isLastStep ? 'Complete Order' : `Continue to
                        ${stages[props.activeTabIndex+1].title}`}}
                      </wizard-button>
                    </div>
                  </div>
                </template>
              </form-wizard>

            </div>
          </div>
          <aside class="flex flex-col lg:w-2/6 md:w-2/6 items-stretch border md:border-h-300 lg:border-h-300">
            <div class="sticky top-0">
              <shopping-bag-info :nebula="nebula"/>
            </div>
          </aside>
          <!--Right hand side bar-->
        </div>
      </template>

      <template v-else>
        <transition name="fade">
          <keep-alive>
            <component :is="'thank-you'"></component>
          </keep-alive>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckoutWizard',
    props: {
      nebula: {
        default: false
      }
    },
    computed: {
      backButtonStyle() {
        return {
          'background-color': 'transparent',
          'border-radius': '0',
          'font-style': 'normal',
          'font-weight': 'normal',
          'font-size': '16px',
          'line-height': '20px',
          'color': '#788995',
          'margin': '15px'
        }
      },
      completeComponent() {
        return 'thank-you'
      },
      baseButtonStyle() {
        return {
          background: this.nebula ? '#5902cb' : '#0000ff',
          'border-color': 'none',
          'box-shadow': '0px 2px 7px rgba(120, 137, 149, 0.254784)',
          'border-radius': '3px',
          'padding': '12px 18px',
          'font-style': 'normal',
          'font-weight': '600',
          'font-size': '14px',
          'line-height': '17px',
          'text-align': 'center',
          'text-transform': 'uppercase',
          'color': '#FFFFFF'
        }
      }
    },
    data() {
      return {
        stages: [{ title: 'Customer information', component: 'customer-info' },
          { title: 'Shipping Information', component: 'shipping-info' },
          { title: 'Payment Selection', component: 'payment-selection' }
        ],
        wizardOption: {
          transition: 'fade',
          shape: 'square'
        },
        thankYou: false
      }
    },
    methods: {
      onComplete: function() {
        this.thankYou = true
      }
    }
  }
</script>
