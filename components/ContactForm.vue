<template>
  <div class="px-4">
    <div class="headline-lg font-bold">Contact Us</div>
    <div class="my-6">
      <form @submit="handleSubmit" class="flex flex-wrap">
        <div class="form flex-grow">
          <div class="flex flex-wrap">
            <div class="w-1/2 block form-control-group px-2">
              <div class="floatable">
                <input type="text" placeholder="Your name" name="contact-name" class="form-control" required="required"
                       id="footer-contact-name">
                <label for="footer-contact-name">Your name</label>
              </div>
            </div>
            <div class="w-1/2 block form-control-group px-2">
              <div class="floatable">
                <input type="email" placeholder="Email address" name="contact-name" required="required"
                       class="form-control" id="footer-contact-email">
                <label for="footer-contact-email">Email Address</label>
              </div>
            </div>
            <div class="w-1/2 block form-control-group px-2">
              <div class="floatable">
                    <textarea name="contact-name" placeholder="Message" required="required" class="form-control"
                              id="footer-contact-message"></textarea>
                <label for="footer-contact-message">Message</label>
              </div>
            </div>


          </div>
        </div>
        <div class="m-4 flex items-center">
          <button class="bg-blue-800 rounded-full flex h-auto my-auto p-4 items-center text-white" type="submit">
            <span class="hidden sm:block xs:block px-3">Send</span>
            <svg width="20" height="20" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.00966549 17.3979L20.2975 8.69894L0.00966549 0L0 6.76585L14.4982 8.69894L0 10.632L0.00966549 17.3979Z"
                    fill="white"/>
            </svg>

          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactForm',
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        alert('Form submitted')
      }
    }
  }
</script>

<style scoped>

</style>
