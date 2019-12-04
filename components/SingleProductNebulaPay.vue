<template>
  <div class="block w-screen">
    <div class="nebula mx-auto relative py-16 text-center">
      <div class="xs:p-0 px-20 block">
        <div class="flex flex-col items-center ">
          <div class="headline-sm text-center">
            Choose the payment plan that's best for you
          </div>
          <div class="w-full">
            <div class="copped">
              <span class="copped-text">COPPED BY NOV. 23</span>
              <!--help tip icon-->
              <span class="absolute right-0 mr-3">
                <!--Tootltip popup-->
              <tip-popup>

                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="45">
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#5902CB"/>
                  </mask>
                  <g mask="url(#mask0)">
                  <rect x="-70" y="-36" width="170" height="125" fill="#5902CB"/>
                  </g>
                  <path
                    d="M20.328 25.432C20.328 24.568 20.52 23.856 20.904 23.296C21.304 22.72 21.88 22.096 22.632 21.424C23.208 20.912 23.632 20.472 23.904 20.104C24.192 19.72 24.336 19.288 24.336 18.808C24.336 18.136 24.064 17.592 23.52 17.176C22.976 16.76 22.248 16.552 21.336 16.552C19.608 16.552 18.304 17.168 17.424 18.4L15.096 16.888C15.784 15.944 16.672 15.224 17.76 14.728C18.848 14.216 20.128 13.96 21.6 13.96C23.392 13.96 24.816 14.352 25.872 15.136C26.944 15.904 27.48 16.968 27.48 18.328C27.48 18.984 27.368 19.56 27.144 20.056C26.936 20.552 26.68 20.976 26.376 21.328C26.072 21.664 25.672 22.056 25.176 22.504C24.568 23.048 24.112 23.528 23.808 23.944C23.52 24.36 23.376 24.856 23.376 25.432H20.328ZM21.864 31.168C21.304 31.168 20.84 30.992 20.472 30.64C20.12 30.272 19.944 29.824 19.944 29.296C19.944 28.768 20.12 28.328 20.472 27.976C20.84 27.624 21.304 27.448 21.864 27.448C22.408 27.448 22.856 27.624 23.208 27.976C23.576 28.328 23.76 28.768 23.76 29.296C23.76 29.824 23.576 30.272 23.208 30.64C22.856 30.992 22.408 31.168 21.864 31.168Z"
                    fill="white"/>
                </svg>

                <div slot="content">
                  <div class="helptip ">
                    <div class="flex items-center m-2">
                      <span>
                       <svg width="70" height="70" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="106" height="106" rx="30" fill="url(#paint_nebula_linear)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M51.5112 17.1993C51.5112 16.1174 52.5712 15.3534 53.5977 15.6956L79.7578 24.4172C80.4051 24.633 80.8416 25.2387 80.8416 25.921V82.7813C80.8416 83.9467 79.6262 84.7137 78.5743 84.2121L52.4141 71.7386C51.8625 71.4756 51.5112 70.9189 51.5112 70.3078V17.1993Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M53.3272 32.2197L78.8933 84.3117L53.3272 72.2704V32.2197Z" fill="#E3E3E3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M25 24.6857C25 22.9578 26.7448 21.7759 28.3494 22.4169L54.3304 32.7945V87.4801C54.3304 89.2814 52.4475 90.4634 50.8252 89.6804L26.3812 77.8825C25.5367 77.4749 25 76.62 25 75.6822V24.6857Z"
                              fill="#F4F4F4"/>
                        <defs>
                        <linearGradient id="paint_nebula_linear" x1="-13.1101" y1="40.2483" x2="47.5047" y2="117.729"
                                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C496FF"/>
                        <stop offset="1" stop-color="#6204DA"/>
                        </linearGradient>
                        </defs>
                        </svg>

                      </span>
                      <div class="headline-lg font-bold ml-3">Nebula Pay</div>
                    </div>
                    <div class="p-2">
                      Gone are the days when you have to pay one time, Now you can pay in installments with Nebula Pay. Adjust the payment to what suits you best
                    </div>
                  </div>
                </div>
              </tip-popup>


              </span>
            </div>
            <div class="nebula-plan">
              <div class="nebula-plan-chooser"></div>
              <div class="nebula-plan-chooser"></div>
            </div>
          </div>
        </div>
        <div class="flex mx-4 btn btn-nebula p-3 justify-center my-3">
          <svg class="hicon mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.086 2.06702L5.27032 8.50023V18.1501C5.27032 27.0761 11.5917 35.4232 20.086 37.4497C28.5804 35.4232 34.9017 27.0761 34.9017 18.1501V8.50023L20.086 2.06702ZM31.6097 18.1502C31.6097 25.4197 26.7041 32.1263 20.0864 34.1206C13.4687 32.1263 8.56308 25.4197 8.56308 18.1502V10.5911L20.0864 5.5893L31.6097 10.5911V18.1502ZM12.5302 19.099L10.2091 21.3667L16.7938 27.8L29.9634 14.9335L27.6422 12.6497L16.7938 23.2485L12.5302 19.099Z"
                  fill="white"/>
          </svg>
          Confirm Plan
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NebulaPay'
  }
</script>

<style scoped lang="scss">
  .nebula {
    margin: 0 auto;
    height: 100vh;
    background: #FFFFFF;
    max-width: 750px;


    .nebula-plans {
      @apply my-4;
    }
  }
</style>
