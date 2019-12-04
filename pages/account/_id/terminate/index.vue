<template>
  <div class="my-12 block font-sans">
    <div>
      <div class="mt-16  flex justify-center">
        <div class="">
          <div class="headline font-bold flex-auto w-11/12 text-center">
            My Account
          </div>
          <component :is="dynamicComponent" @onTerminate="nextComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TerminateBegin from '../../../../components/TerminateBegin'
  import TerminateComplete from '../../../../components/TerminateComplete'

  export default {
    name: 'index',
    components: {
      TerminateBegin,
      TerminateComplete
    },
    data() {
      return {
        index: 0,
        components: [
          'terminate-begin',
          'TerminateComplete'
        ]
      }
    },
    computed: {
      dynamicComponent() {
        return this.components[this.index]
      }
    },
    methods: {
      nextComponent() {
        this.index++
      }
    }
  }
</script>

<style scoped>

</style>
