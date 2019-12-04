<template>
  <div class="flex border border-h-300 rounded">
    <t-dropdown id="navbar-top-option" :button-props="{ baseClass: 'flex p-0 border-r rounded-bl-lg rounded-tl-lg'}"
                dropdown-class="w-56 bg-white rounded-sm border shadow-md p-0 z-10 text-sm lg:ml-32" placement="bottom"
                size="sm">
      <template v-slot:button-content>
        <span class="text-sm m-0 text-h-300 hide-xs">All</span>
      </template>
      <ul>
        <li>
          <a href="#" class="block no-underline px-4 py-2 hover:bg-h-100">All</a>
        </li>
        <li v-for="i in 5">
          <a href="#" class="block no-underline px-4 py-2 hover:bg-h-100">Option {{i}}</a>
        </li>
      </ul>
    </t-dropdown>
    <div class="flex h-full items-center m-auto w-full h-full relative overflow-hidden">
      <label for="navbar-search" class="hidden">Search</label>
      <input type="search" class="bg-white mx-3 h-auto flex flex-row flex-1 text-sm py-1 whitespace-no-wrap" name=""
             id="navbar-search"
             placeholder="Search for products, Brands, Colors">
      <div class="absolute right-0 bg-white px-2 border-l border-gray-200 h-full flex flex-row items-center">
        <a class="flex-shrink-0 self-center pt-1 h-full w-auto relative overflow-hidden cursor-pointer"
           @click="toggleInstaSearch">
          <img src="~assets/svg/camera.svg" class="icon" alt="">
        </a>
      </div>
    </div>
    <heylo-modal ref="insta-search-modal">
      <template slot-scope="props">
        <insta-search/>
      </template>
    </heylo-modal>
  </div>
</template>

<script>
  export default {
    name: 'NavbarSearch',
    methods: {
      toggleInstaSearch() {
        this.$refs['insta-search-modal'].toggleState()
      }
    }
  }
</script>

<style scoped lang="scss">
  @media(max-width: 455px) {
    .hide-xs {
      display: none;
    }

    #navbar-search {;
    }
  }

</style>
