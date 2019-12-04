<template>
  <div class="container">
    <div class="headline">
      Likes
    </div>
    <div class="result-hint">
      4 current likes
    </div>
    <div>
      <product-grid>
        <product-like-card/>
      </product-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductLikesListing',
    props: {
      title: {
        default: 'Product'
      }
    }
  }
</script>

