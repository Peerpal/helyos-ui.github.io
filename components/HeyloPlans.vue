<template>
  <div class="block h-screen">
    <transition name="fade">
      <wait-loader timeout="20000" @onWaitComplete="onWaitLoaded" v-if="!loaded">
        <p class="font-bold font-sans w-full">Please wait... You’re currently placed on a waiting list to sign up. If
          you’re rejected please try again
          later.</p>
      </wait-loader>
      <div class="block my-16" v-else>
        <div class="text-center my-16">
          <div class="headline-lg font-bold my-4">
            Monthly Memberships
          </div>
          <p>
            Choose a payment option:
          </p>
        </div>
        <div class="plan-listing w-full flex-wrap mb-16 justify-center">
          <div class="w-1/4 xs:w-full sm:w-1/2 md:w-1/3 mb-6 p-4 block overflow-hidden" v-for="(plan, index ) in plans"
               :key="`heylo-plan-${index}`">
            <div class="plan-card cursor-pointer" @click.stop="onPlanClick(plan.id)">
              <div class="headline uppercase my-2 ">
                {{plan.type}}
              </div>
              <div class="border-t border-h-300">
                <div class="price">
                  <div class="value">
                    <span class="currency">$</span>
                    <span class="">{{plan.cost}}</span>
                  </div>
                  <div class="block" v-if="plan.features.length">
                    <ul class="benefit-listing" v-for="(feature, fid) in plan.features"
                        :key="`${plan.type}-feature-${fid}`">
                      <li class="benefit-item">{{feature}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'PlanListing',
    data() {
      return {
        loaded: false,
        plans: [{
          id: 1,
          type: 'Free',
          cost: '0',
          features: []
        }, {
          id: 2,
          type: 'Standard',
          cost: '10',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '1 pick your price chances'
          ]
        }, {
          id: 3,
          type: 'Premium',
          cost: '20',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '2 pick your price chances',
            'The Key access',
            'Pyro Access'
          ]
        }, {
          id: 4,
          type: 'Pro+',
          cost: '30',
          features: [
            'Insta Search',
            'Plazma Authentication',
            'Plazma Sole Check',
            'Nebula Pay',
            '1 pick your price chances',
            'The Key access',
            'Pyro Access',
            'Delphi price predictor A.I.',
            'First to try new Features'
          ]
        }]
      }
    },
    methods: {
      onWaitLoaded() {
        this.loaded = true
      },
      onPlanClick(plan_id) {
        let plan = this.plans.filter(plan => plan.id == plan_id)
        this.$emit('onPlanChoose', { plan: plan })
      }
    }
  }
</script>

<style scoped lang="scss">
  .plan-listing {
    display: flex;
    align-items: flex-start;

    .plan-card {
      background: #FFFFFF;
      border: 2px solid #C4C4C4;
      box-sizing: border-box;
      border-radius: 5px;
      min-height: 260px;
      box-shadow: 12px 12px 1px 1px #6767FF;
      text-align: center;
      overflow: hidden;
      position: relative;
      display: block;
      @apply px-5;
      .headline {
        display: block;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 42px;
        color: #000000;
        padding-bottom: 21px;
        padding-top: 21px;
        @apply font-display;
      }

      .price {
        @apply font-display relative;

        .value {
          @apply flex justify-center;
          font-style: normal;
          font-weight: normal;
          font-size: 60px;
          line-height: 75px;
          color: #000000;
          margin-bottom: 22px;

          .currency {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            padding-top: 12px;
            color: #000000;
          }

        }
      }

      .benefit-listing {
        display: list-item;
        text-align: left;
        margin: 21px 12px;

        .benefit-item {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 21px;
          color: #000000;
          list-style: disc;
          padding-left: 12px;
        }
      }
    }

  }
</style>
