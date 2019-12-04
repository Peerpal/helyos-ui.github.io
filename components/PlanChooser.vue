<template>
  <div>
    <div class="flex items-center p-2 bg-white"></div>
  </div>
</template>

<script>
  export default {
    name: 'PlanChooser',
    props: {
      plan: {
        required: true,
        default() {
          return {
            title: 'Weekly',
            list: [{}]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
