<template>
  <div class="container my-10 ">
    <div>
      <h3 class="headline bg-black inline-block text-white p-4 my-10">{{title}}</h3>
    </div>
    <div class="bg-h-100 rounded-lg">
      <!--TODO: Use the ID to get related products-->
      <!--List the related products from the current product ID-->
      <hooper :settings="hooperSettings" class="px-4">
        <!--Do a loop on the slide element below-->
        <slide class="lg:w-4/12 md:w-6/12 sm:w-full block h-full" v-for="(i, index) in 6"
               :key="`${id}-product-show-card-${index}`">
          <product-show-card/>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'

  export default {
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    name: 'RelatedProduct',
    props: {
      id: {
        default: 1,
        type: Number,
        required: true
      },
      title: {
        default: 'Related product',
        type: String
      }
    },
    data() {
      return {
        hooperSettings: {
          itemsToShow: 1,
          centerMode: false,
          infiniteScroll: true,
          breakpoints: {
            455: {
              itemsToShow: 1,
              centerMode: true
            }, 768: {
              itemsToShow: 3
            },
            1024: {
              itemsToShow: 4,
              pagination: 'fraction'
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
