<template>
  <img src="/logo.svg" alt="Helyos" class="logo" :style="computedStyle">
</template>

<script>
  export default {
    props: {
      width: {
        default: 100
      },
      height: {
        default: 49
      }
    },
    computed: {
      computedWidth() {
        return this.width + 'px'
      }, computedHeight() {
        return this.height + 'px'
      },
      computedStyle() {
        return {
          width: this.computedWidth,
          height: this.computedHeight
        }
      }
    }
  }
</script>

