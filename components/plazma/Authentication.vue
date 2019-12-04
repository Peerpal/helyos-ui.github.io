<template>
  <div class=" flex flex-col items-center justify-center">
    <div class="headline-lg font-bold my-6">Plazma Authentication</div>
    <div class="plazma-card bg-white text-center p-12">
      <transition name="fade">
        <authentication-response v-if="ready" @onTryAgain="onTryAgain"/>
        <div v-else>
          <div class="sole-placeholder  cursor-pointer">
            <img src="~/assets/images/auth_anim.gif" alt="">
          </div>
          <p class="my-6">Authenticating... Please Wait</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import AuthenticationResponse from './AuthenticationResponse'

  export default {
    name: 'Authentication',
    components: { AuthenticationResponse },
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

<style scoped>

</style>
