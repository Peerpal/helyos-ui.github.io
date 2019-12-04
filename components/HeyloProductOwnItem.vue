<template>
  <div class="own-item-card py-4 border border-gray-300 -mt-6 mr-12 absolute right-0">
    <div class=" cursor-pointer right-0 absolute mr-4 mt-2">
      <!--Help tip icon-->
      <!--Tootltip popup-->
      <tip-popup>
        <svg class="hicon" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
            <circle cx="16.5" cy="16.5" r="16.5" fill="black"/>
          </mask>
          <g mask="url(#mask0)">
            <rect x="-51.3335" y="-26.3999" width="124.667" height="91.6667" fill="black"/>
          </g>
          <path
            d="M14.9072 18.7835C14.9072 18.1499 15.048 17.6278 15.3296 17.2171C15.6229 16.7947 16.0453 16.3371 16.5968 15.8443C17.0192 15.4688 17.3301 15.1462 17.5296 14.8763C17.7408 14.5947 17.8464 14.2779 17.8464 13.9259C17.8464 13.4331 17.6469 13.0342 17.248 12.7291C16.8491 12.424 16.3152 12.2715 15.6464 12.2715C14.3792 12.2715 13.4229 12.7232 12.7776 13.6267L11.0704 12.5179C11.5749 11.8256 12.2261 11.2976 13.024 10.9339C13.8219 10.5584 14.7605 10.3707 15.84 10.3707C17.1541 10.3707 18.1984 10.6582 18.9728 11.2331C19.7589 11.7963 20.152 12.5766 20.152 13.5739C20.152 14.055 20.0699 14.4774 19.9056 14.8411C19.7531 15.2048 19.5653 15.5158 19.3424 15.7739C19.1195 16.0203 18.8261 16.3078 18.4624 16.6363C18.0165 17.0352 17.6821 17.3872 17.4592 17.6923C17.248 17.9974 17.1424 18.3611 17.1424 18.7835H14.9072ZM16.0336 22.9899C15.6229 22.9899 15.2827 22.8608 15.0128 22.6027C14.7547 22.3328 14.6256 22.0043 14.6256 21.6171C14.6256 21.2299 14.7547 20.9072 15.0128 20.6491C15.2827 20.391 15.6229 20.2619 16.0336 20.2619C16.4325 20.2619 16.7611 20.391 17.0192 20.6491C17.2891 20.9072 17.424 21.2299 17.424 21.6171C17.424 22.0043 17.2891 22.3328 17.0192 22.6027C16.7611 22.8608 16.4325 22.9899 16.0336 22.9899Z"
            fill="white"/>
        </svg>
        <div slot="content">
          <div class="helptip ">
            <div class="flex items-center m-2">
              <svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="106" height="106" rx="30" fill="url(#paint0_linear)"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M23 53C23 69.569 36.431 83 53 83C69.569 83 83 69.569 83 53C83 36.431 69.569 23 53 23C36.431 23 23 36.431 23 53ZM33.1531 66.5221C26.7563 57.1312 27.8216 44.5415 35.7053 36.3589C36.0979 36.7202 36.4106 37.1596 36.6233 37.6489C37.2353 39.0199 37.2353 40.4329 37.2353 41.6839V41.7112C37.2353 42.6852 37.2353 43.6072 37.5503 44.2789C37.9853 45.2029 39.8483 45.5959 41.4953 45.9409C41.5405 45.9506 41.5859 45.9602 41.6312 45.9699C42.1788 46.0864 42.7346 46.2046 43.2443 46.3459C44.7623 46.7659 45.9383 48.1309 46.8773 49.2259L46.9116 49.2655C47.3032 49.7169 47.8546 50.3527 48.1343 50.5159C48.2873 50.4079 48.7703 49.8829 49.0103 49.0219C49.1933 48.3649 49.1423 47.7799 48.8723 47.4649C47.1953 45.4849 47.2853 41.6689 47.8043 40.2649C48.62 38.0489 51.168 38.2128 53.0338 38.3328L53.0363 38.3329C53.7323 38.3779 54.3893 38.4199 54.8753 38.3599C56.2914 38.1826 56.9652 36.5088 57.3848 35.4665C57.519 35.1332 57.6272 34.8644 57.7253 34.7299C58.5203 33.6409 60.7973 32.0539 62.4563 30.9349C69.3386 33.8858 74.4497 39.8791 76.2768 47.141C78.1039 54.4029 76.4377 62.1014 71.7713 67.9579C71.9513 67.0609 72.0653 66.0289 72.0653 64.8559V64.5409C72.0653 61.7749 72.0653 60.5119 70.1093 59.3929C69.2843 58.9279 68.6693 58.6429 68.1743 58.4179C67.0733 57.9199 66.3443 57.5899 65.3603 56.1499L65.0123 55.6339C63.9773 54.0589 63.2303 52.9249 60.3863 53.3749C54.7913 54.2629 54.3773 55.2469 54.1313 56.9089L54.0923 57.1819C53.7293 59.6089 53.6633 60.4279 54.6773 61.4929C58.4723 65.4739 60.7463 68.3449 61.4363 70.0249C61.7453 70.7809 62.5013 72.9409 62.1563 75.1909C51.6554 79.5313 39.5498 75.913 33.1531 66.5221Z"
                      fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="-28.1708" y1="48.4975" x2="48.2466" y2="131.258"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D7D7D7"/>
                    <stop offset="1"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="headline-lg font-bold ml-3">Global</div>
            </div>
            <div class="p-2">
              We are building a global repository of authentic sneakers that will be indexed and allow for cheaper
              prices of your streetwear
              This is just the beginning of a revolution in streetwear
            </div>
          </div>
        </div>
      </tip-popup>
    </div>
    <div class="px-12 py-6 mt-6">
      <div class="headline text-center mb-4 block">Own this item?</div>
      <div class="">
        <div class="form">
          <div class="form-control-group">
            <label for="sp-zipcode" class="hooper-sr-only">Zip code</label>
            <input type="text" class="form-control" name="sp-zipcode" id="sp-zipcode" placeholder="Zipcode"/>
          </div>
          <button class="btn btn-black w-full my-3">Go Global</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeyloProductOwnItem'
  }
</script>

<style scoped lang="scss">
  .own-item-card {
    position: relative;
    background: #FFFFFF;
    width: 300px;
    box-shadow: 0px 3.06139px 22.9605px rgba(0, 0, 0, 0.1);
  }
</style>
