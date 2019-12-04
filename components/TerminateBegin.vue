<template>
  <div class="mt-6">
    <p class="font-bold">
      Gone, but not forgotten... we’ll miss you hope you can come back
    </p>
    <div class="flex justify-center py-8">
      <div class="btn btn-black py-3 px-8" @click="terminate">Terminate it</div>
      <div class="btn btn-black py-3 px-8" @click="revive">Revive it</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TerminateBegin',
    methods: {
      terminate() {
        this.$emit('onTerminate')
      }, revive() {
        this.$emit('onRevive')
      }
    }
  }
</script>

<style scoped>

</style>
