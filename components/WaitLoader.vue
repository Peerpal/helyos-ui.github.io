<template>
  <div class="waiting" v-show="!loaded">
    <div class="text-center">
      <preloader/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WaitLoader',
    props: {
      timeout: {
        default: 2000,
        required: false
      }
    },
    data() {
      return {
        loading: null,
        loaded: false
      }
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      startLoading() {
        this.loading = setTimeout(this.doneLoading, this.timeout)
      },
      doneLoading() {
        clearTimeout(this.loading)
        this.loaded = true
        this.$emit('onWaitComplete')
      }
    }
  }
</script>

<style scoped>

</style>
