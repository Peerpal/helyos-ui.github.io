<template>
  <div class="container">
    <div>
      <h3 class="headline-lg my-10 mx-4">{{title}}</h3>
    </div>
    <div>
      <product-grid>
        <product-show-card/>
      </product-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductListing',
    props: {
      title: {
        default: 'Product'
      }
    }
  }
</script>

