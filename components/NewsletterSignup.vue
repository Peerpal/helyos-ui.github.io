<template>
  <div class=" bg-gray-100 block">
    <div class="container ">
      <div class="block py-16 w-full  text-center">
        <div class="mb-12 block">
          <h2 class="headline-lg mb-4 font-bold">What's New on Helyos</h2>
          <p class="mt-2">Sign up for Exclusive Early Sale access and Tailored new arrivals</p>
        </div>
        <form @submit="handleSubmit" class="form">
          <div class="form-control-group flex justify-center">
            <div class="floatable">
              <input type="email" name="" class="form-control " id="newsletter-email" placeholder="Email address"/>
              <label for="newsletter-email">Newsletter</label>
            </div>
            <button class="btn btn-blue">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsletterSignup',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
