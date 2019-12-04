<template>
  <div class="flex flex-col items-center justify-center">
    <div class="headline-lg text-center font-bold my-6">Plazma Sole Check</div>
    <div class="plazma-card">
      <transition name="fade">
        <div v-if="ready">
          <sole-check-response @onTryAgain="onTryAgain"/>
        </div>
        <div v-else>
          <div class="sole-placeholder cursor-pointer">
            <img src="~/assets/images/sole_anim.gif" alt="">
          </div>
          <p class="my-6">Checking Sole... Please Wait</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import SoleCheckResponse from './SoleCheckResponse'

  export default {
    name: 'SoleCheck',
    components: { SoleCheckResponse },
    data() {
      return {
        ready: false,
        timeout: null
      }
    }, mounted() {
      this.demoLoader()
    },
    methods: {
      demoLoader() {
        this.timeout = setTimeout(this.isReady, 5000)
      },
      isReady() {
        this.ready = true
        clearTimeout(this.timeout)
      },
      onTryAgain() {
        this.$emit('onTryAgain')
      }
    }
  }
</script>

<style lang="scss">

</style>
