<template>
  <div class="font-body text-base">
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccountPage',
    layout: 'account'
  }
</script>

<style lang="scss">
  .alert {
    width: 913px;
    height: 182px;
    position: relative;
    text-align: left;
    padding: 24px;
    display: flex;

    .alert-btn {
      position: relative;
      border: 1.13978px solid #000000;
      box-sizing: border-box;
      border-radius: 3.03943px;
      display: inline-block;
      margin-top: 12px;
      @apply p-2;
    }

    &.info {
      @apply bg-cyan-700;

    }
  }
</style>
