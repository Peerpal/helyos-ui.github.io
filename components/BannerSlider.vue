<template>
  <div>
    <hooper class="carousel-inner" :autoPlay="true" :playSpeed="5000" :centerMode="true" :infiniteScroll="true">
      <!--Use unique keys to avoid errors-->
      <slide v-for="i in 10" :key="`banner-slider-${i}`">
        <div class="h-56 flex items-center justify-center bg-gray-100 text-sm text-h-300">Slide {{i}}</div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
  // require styles
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
  import 'hooper/dist/hooper.css'

  export default {
    name: 'BannerSlider',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    props: {
      data: {
        required: false,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {

    }
  }
</script>

<style scoped>
  .carousel-inner {
    @apply border-b border-gray-300;
  }
</style>
