<template>
  <div class="border-b border-gray-300 z-0">
    <div class="relative block container">
      <!--like or unlike section-->
      <div class="lg:absolute my-4 sm:relative sm:flex sm:justify-center">
        <!--Like / Unlike action buttons-->
        <div class="like-action flex">
          <!--Thumbs up-->
          <heylo-popup>
            <template slot-scope="props">
              <a href="#" @click.stop="props.pop()"
                 class="flex items-center rounded-full flex-shrink-0 border ml-4 p-3 w-auto flex-1 hover:border-h-300 leading-tight h-full cursor-pointer relative">
                <span title="like" class="hint">
                  <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-thumbs-up"></use>
                 </svg>
                </span>
                <span class="hint text-base font-light lg:hidden md:hidden ml-2">like</span>
              </a>
            </template>
            <!--Popup for product size chooser-->
            <template slot="popup-content" slot-scope="props">
              <div class="absolute mt-16 left-0 z-10">
                <single-product-size-chooser-popup :with-price="false" @close="props.pop()" @onPick="setPicked"/>
              </div>
            </template>
          </heylo-popup>
          <!--Thumb down-->
          <a href="#"
             class="flex items-center rounded-full flex-shrink-0 border ml-4 p-3 hover:border-h-300 leading-tight h-full cursor-pointer relative">
            <span title="unlike" class="hint">
             <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-thumbs-down"></use>
             </svg>
            </span>
            <span class="lg:hidden hint text-base font-light md:hidden ml-2">Unlike</span>
          </a>
        </div>
      </div>

      <!--Product information section-->
      <div class="lg:flex lg:flex-wrap mb-10">
        <!--Product meta-->
        <div class=" lg:w-3/4 w-full my-6 z-0">
          <div class="single-product-card w-auto flex flex-col items-center">
            <div class="headline flex items-center text-center relative lg:w-5/6">
              {{product.name}}
              <nuxt-link :to="{name: 'delphi-id', params: {id: 1}}"
                         class="mx-4 absolute bottom-0 right-0 -mr-4">
                <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 7.46308L6.37937 0H26V18.7806L19.7639 26H0V7.46308Z"
                        fill="#0000FF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.01855 10.2672L9.44451 6.25928H19.9815V16.3452L16.6325 20.2222H6.01855V10.2672Z"
                        fill="white"/>
                  <circle cx="13" cy="13" r="5" fill="#0000FF"/>
                </svg>
              </nuxt-link>
            </div>
            <!--Product metadata-->
            <div class="product-meta">
              <span>{{product.brand}}</span>
              <span>{{product.condition}}</span>
              <span>{{product.sku}}</span>
            </div>
            <!--Product Thumbnail-->
            <div class="product-thumb">
              <hooper :settings="hooperSettings">
                <!--Use unique keys to avoid errors-->
                <slide v-for="i in 3" :key="`single-product-slider-${i}`">
                  <div class="flex w-full justify-center">
                    <img src="@/assets/images/shoe3.png" alt="alt-shoe"/>
                  </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
            </div>
            <!--Product cta buttons-->
            <div class="flex flex-wrap w-full justify-center z-10">
              <single-product-size-chooser-button/>
              <payment-button @onPay="toggleProductPaymentSidebar"/>
            </div>
          </div>
        </div>
        <!--Product description panel and featured product panel-->
        <aside class="lg:w-1/4 my-4 relative lg:p-0 px-6 ">
          <div class="relative h-10 my-10 ">
            <div class=" inline-flex justify-end absolute right-0 mr-10">
              <heylo-popup>
                <template slot-scope="props">
                  <div class="hicon rounded-full border-2 border border-white hint cursor-pointer inline"
                       @click.stop="props.pop">
                    <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.5282 21.1685C3.5282 30.9113 11.4258 38.809 21.1686 38.809C30.9115 38.809 38.8091 30.9113 38.8091 21.1685C38.8091 11.4257 30.9115 3.52808 21.1686 3.52808C11.4258 3.52808 3.5282 11.4257 3.5282 21.1685ZM9.49846 29.1198C5.73707 23.5978 6.36347 16.1949 10.9992 11.3834C11.23 11.5959 11.4139 11.8542 11.539 12.1419C11.8989 12.9481 11.8989 13.779 11.8989 14.5146V14.5306C11.8989 15.1033 11.8988 15.6455 12.0841 16.0405C12.3399 16.5838 13.4354 16.8149 14.4038 17.0178C14.4304 17.0234 14.4571 17.0291 14.4838 17.0348C14.8057 17.1033 15.1325 17.1728 15.4323 17.2559C16.3249 17.5029 17.0164 18.3055 17.5685 18.9494L17.5887 18.9726C17.8189 19.2381 18.1432 19.612 18.3076 19.7079C18.3976 19.6444 18.6816 19.3357 18.8227 18.8294C18.9304 18.4431 18.9004 18.0991 18.7416 17.9139C17.7555 16.7496 17.8084 14.5058 18.1136 13.6802C18.5932 12.3771 20.0915 12.4735 21.1886 12.544L21.1901 12.5441C21.5994 12.5706 21.9857 12.5953 22.2715 12.56C23.1041 12.4558 23.5003 11.4715 23.7471 10.8587C23.826 10.6626 23.8896 10.5046 23.9473 10.4255C24.4148 9.78517 25.7537 8.85199 26.7292 8.194C30.7761 9.92915 33.7815 13.4533 34.8558 17.7234C35.9302 21.9935 34.9504 26.5204 32.2066 29.9641C32.3124 29.4366 32.3794 28.8298 32.3794 28.1401V27.9548C32.3794 26.3284 32.3794 25.5857 31.2293 24.9277C30.7442 24.6543 30.3825 24.4867 30.0915 24.3544C29.4441 24.0616 29.0154 23.8675 28.4368 23.0208L28.2322 22.7174C27.6236 21.7913 27.1843 21.1244 25.512 21.3891C22.2221 21.9112 21.9786 22.4898 21.834 23.4671L21.811 23.6276C21.5976 25.0547 21.5588 25.5363 22.155 26.1626C24.3865 28.5034 25.7237 30.1916 26.1294 31.1795C26.3111 31.624 26.7557 32.8942 26.5528 34.2172C20.3781 36.7694 13.2598 34.6418 9.49846 29.1198Z"
                            fill="black"/>
                    </svg>
                  </div>
                </template>
                <template slot="popup-content">
                  <div class="w-3/4 relative z-10">
                    <product-ownership/>
                  </div>
                </template>
              </heylo-popup>
            </div>
          </div>
          <!--Description card-->
          <div class="z-0 flex flex-col items-center">
            <div class="card mx-auto">
              <div class="card-head">
                <div class="headline font-normal">Description</div>
              </div>
              <div class="card-body">
                <div class="list-group text-sm">
                  <div class="list-group-item">
                    Release date:
                  </div>
                  <div class="list-group-item">
                    Color way:
                  </div>
                  <div class="list-group-item">
                    Designer:
                  </div>
                  <div class="list-group-item">
                    Brand:
                  </div>
                  <div class="list-group-item">
                    Silohette:
                  </div>
                  <div class="list-group-item">
                    SKU:
                  </div>
                  <div class="list-group-item">
                    Category:
                  </div>
                  <div class="list-group-item">
                    Description:
                  </div>
                </div>
              </div>
              <div class="card-foot">
                <div class="w-full flex items-center justify-center">
                  <a href="">More...</a>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <div class="headline">featured items</div>
              </div>
              <div class="card-body">
                <div class="featured-thumb">
                  <hooper :settings="hooperSettings">
                    <slide v-for="i in 10" :key="`featured-product-slider-${i}`">
                      <div class="block flex justify-center items-center text-center">
                        <div class="relative">
                          <div class="absolute right-0 mr-4 cursor-pointer">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <circle r="9" transform="matrix(1 0 0 -1 9.5 9.5)" stroke="black"/>
                              <path
                                d="M13.0625 9.93333H10.1175V12.815H9.11998V9.93333H6.17498V8.99917H9.11998V6.10167H10.1175V8.99917H13.0625V9.93333Z"
                                fill="black"/>
                            </svg>
                          </div>
                          <div>
                            <svg width="100%" height="150" viewBox="0 0 551 423" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <rect x="-87" y="-32" width="681" height="454.908" fill="url(#pattern0)"/>
                              <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlink:href="#image0" transform="scale(0.002 0.00299401)"/>
                                </pattern>
                                <image id="image0" width="500" height="334"
                                       xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAgICAsICAsQCwkLEBMOCwsOExYSEhMSEhYVERMSEhMRFRUZGhsaGRUhISQkISEwLy8vMDY2NjY2NjY2Njb/2wBDAQwLCwwNDA8NDQ8TDg4OExQODw8OFBoSEhQSEhoiGBUVFRUYIh4gGxsbIB4lJSIiJSUvLywvLzY2NjY2NjY2Njb/wAARCAFOAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1yiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKRmCqWY4UDJPsK5Obx7alp1srZ5RC/ll3OwFsZJAAY4+uKaTewHW0V59N4/1TJ8q3gUdshyf/Qx/KqMvj3X+q+Sv0TP8yafIwPT6K8ZvfiZ4ltpPLSSJiOpMa9fyqmfir4tzxJB/36WlYD3KivFIPit4myBKIGHc7MH9K3ofiNreBvgt2B77XB/RxT5WwPTaK4eD4gS4U3FkrBu6MV/Qhv510WkeIrHV3aCINHOgDGNx1B7gjg0nFroBrUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAjuf+Pab/cb+Rrx22+9fD/p4P/oNew3f/HrP/wBc3/8AQTXj1r1vv+vg/wAhWlMCGWq0nSrUtVZKtjOa1Q/6W9UMmruqHN1J9ao59fwrJiJYydwrqoeVT6CuTjOGFdZD/q0+gqogaaf6uP6muq8Gj/idS+0S/wAmrlk/1UX1NdV4N/5DM3/XNf8A0E1T+F/MZ3tFFFYiCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAhvOLSf/rm/wD6Ca8etet9/wBfB/kK9gvjiyuD/wBM2/ka8etPu3nvcN/IVpTAjlqtJVmWq0lWxnK6kf8AS5PrVM5q1qBzdS/7xqrWTEOQ/MK66DmJD7D+VcgvUV11qcwJ/uj+VVADUj/1UX1NdX4M/wCQzN/1zX/0E1ykPMKexNdV4M51if8A3F/9Aq38L+YzvqKKKwEFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBW1HiwuP+ubfyrx+0Py3f8A18P/ACFev6ocafcn/pma8fsuY7k+tw/8lrSGwDZarSVZkqtJVsZyN62bmX/eP86rVYvB/pEn+8f51XrJiFFddZ/8e8f+6v8AKuSHUYrrbQYgj/3V/lVQA1IP9Uv1/wAK6rwX/wAhif8A3R/6BXLQf6pfr/hXU+C/+QvN/uj/ANAq38L+YHf0UUVgAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFLWTt0u5P+x/UV5DYf8e0x/6byZ/SvW9dYJpF0xDMAo4UFj1HQLk15FZi68q4EVnNIhmZkcBQOQAQCzDJGK1p7DSFkqtIastDqD/8uUi/7zRj/wBnqF7TUj/y6N/33H/8VV8r7D5X2OOvSGuZSvTcf51Xrc1DRb4zvKYxGG52loxj/wAfqmui3jHHAP8AvLj891R7Of8AK/uDkl2ZQBwQfSuts3DwRkd1B/SshPDOqSDMSq59Ayn+TVsWVhq0MSRNYyyMowdgVs/Qbs01Ca3i0HJJbpmrD/ql+prp/Bjf8TmUeqj/ANArl4VvAqxvp92jLnIMLV0PgyU/2+8bRyRuRnZIjIcKgVj8wA4JpyT5WJp9mej0UUVgIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDN18Z0qf6V5xZZWyj29N0n/oZFej6+caXN9K84s1Js4h7yf8AobV00fhfqXHb5j2bHU1Vun2wSFTztbr9DU7qSDTTpt/fQuLSB5Q26MMB8u/aTtLHABx61unbyNIuxyjMo+b1pvnke1XZdA1rbuNhOFVdzHYcBfUntVddI1EtGj2soaUkRLsOW2/eCjHOO9aKXZ/ib83YhkupCuFOPcV0lo8hRfmJO0dfpWIumXCQtK0Eu0MYyShwGHJXp1GOlb9qkoSOQxOqbRhipAxjrnGO9KXmyZ30uzRtpn8tQzEkHjNbvheaRtUkUsdpABH/AAAmsC2ReD71veFx/wATaU/5/wBXWdT+HL0ZlK/KztKKKK4DAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDN1//AJBcv4V57axk20QHA+f/ANDavRNc/wCQZN9BXntqf9HjP+/+jtXVh/gfqaw2+Y9liVtrHIx+tW7fV20yARxrhYzJJncQpLqE+cAHOMcVmyk5NV9RmxaSkHDFDxW9k1ZrQ1Ti1ZrQqXWvTzy3E8vyi6KGWBSdhVJPNxjtk9cDk81auPFpu7lbq4tBhYZYcJIysPOwpIfGRtUEDqRnr0rmWkJPz5bjgCoxM2SGOF/lVuMOxo1Dt5HVHxzdLK92lsovJI/KY7yYgAxdSsRGA2T8xJJP4mtaXxKb63+ywWv2dXjEQAbcFQdAPlB6YHWuAZUC7g3PcV0doAFjIOSMZrNwje9jOUY6NI1YMRoqn73NbvhUZ1KY+n/xtf8AGsGPBx65rf8ACf8AyEJz7n/0BaVX4JehE9mdlRRRXAYBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAZ2u4/syb14x+def2y/6HHnqC//AKG1eg67/wAguf6D+Yrz+2YG1UAZwz8/8CNdeH+B+prT+F+pHIKztQ/495c8cY/UVpScg4655rL1MgWsn4fzrdblrdGF5UgYFQcdnxx9aCbILCQHaUn/AEoHHOT0TP8AWlaa6eIxDds7gDt09KgdCgjJQrIfmBbgEDpgcdxVs2b7fiT3yxKP3COkW75TJ15528dcVtWrYjUd+MehrBu7+e7jSOZhtU7goGOenXvW/ay/u40P3V5/PHYYqJGc2mzTgDHGOTycV0ng/JvLgkd2/wDZRXPx7fl5LNzjscfSuh8HYNzcH3f+YrKp/DkZyXus7CiiiuIxCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAzdf8A+QXN+GK8+0/DWwB5+d+n+8a9A8QkjS5fwzXn2nShYBj+/Jn/AL6rrw/wP1Nae3zJZQRxjFZ95bzSQMyBQvUlzgADvxk1fkfJzVWVi8UsPPzKcn8D2xXRHdG8EnJL7jIntliKi4vAvflWxgjqpYkEUyTSNmmtqFzI6ZYCNcc7GO0MR78cVrm7jg8PrdPCLxoY8iIgMWYHA4b0PpzUOo6hHd6DJNOPJlkjEjW5OShBDbTkKc8eleZPMZurGmocqVb2VSV73SdnZdPM1eululzl5EZDyPlJ+VsYzXQ2xO1D9KwbGz1HWPl0q0luthw5QEqp9C3Cg/jXc2fhHWBEJL1obGIYy8zj8vlyPzNehOcV1OaclfRllDMdjKgRSDnGBn8smtfwZgyzn1L/APoQFZV7Y3ulrA0kyz20mfKnhOUJ9OAOa0vA+TJcH3k/9DFZ1JJ021rcVSacdPxOyooorjMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMrxHj+y5ecE4ArzrT1ItRz/HJ/6Ea9F8RgnS5FUZYkAAcmuC0/TNSNoP8ARpQd0h5Ujgsf72K6KM4xj70lHX7TS/M0gnbRX1H2tnc6hK8VqBtjG6aZztjjX1Zj/Kmz+HrW4SaeTWoDZWkbz3jWbb5lRASdo7g+tS3Eci2enaXyovbgvcKOrfOsSAkemDTfFOleGdMs9UubG9P9pLFIi2McilVDkRujKAW4Dd2puo76Oye1g5nfexhReIvBmmwiPTrK/wBUSI5Z528tAGJOWKgAZOcDFSN4y1QWk2qeHtAtrXSIZBE95MvmPvbopbK9cjIAOMjmsUq9v4Ct5FXCXWpytKwHURwosak+x3Yplm2gW/h2KfVdUu5DLO+7Q7N0XYR0mcSBhyAOSPp0NZqMU+ayu27u2r7sTbdrts2p/HF5qHhm5a1jTS9WW7gjuJrMbBKkiSsGxyQ37rB5q3Bpst14fXXr67lmlM/lRRSMXGOjNuYk5yO3pXP6taWNvoFjd2FlPYpqM7uv2qQSSSxwKFSTCqgUEytjA5roYdUNzoNjoNrbSNPDIZJGUbt5OdoQDnndVx6W7/gLsaumEr4dvI2P7tLmJowegZgQ2PwArY8C4xN77z/4/WfKRoGl2unXMSzXtxIbq4gY8RjGxAdv0/PNa3gu9e8SRjFHCgDYSJcD7+OckmplN8rSjo9ea+n3Bdcu+vY6uiiisSQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMrxHPLb6XJJC5STIAYdR9K80tb6+uLRWnuZZGLyZLOx6OwHf0r0bxVj+yn9dw/ka8ysP+PNf96T/wBDatYRi9Wk33a1C77mxbT6dc2sdrqU8lpNbOz213Gu/hsMVYD5gQwyCKa8fhSTTtWtwbq5cQ/aLy8O2N5FV1JjjLbtu5iuSRk1mydKoDxAfDszyCzhvkulMbwz5KYVkkBwOvIHWqaC5fh8QWlroUug2Hh2W60+NpBGl0xlMkmd7SKVjXIUnOQQcelQaSkSTwEeEoredsiS6lS5uVjkUMQPJZn/ANYyjbzxn8afpPjTxTrupTQpdJbJtMkUSRoQoyBtBZST170s/iLxHc3N1YW2qTC+tB842oqMD3TavOPcVzzrwhJxd7pJuy0SfU0jBySatZ6L1MvxpeavcQaeddYC7YTvHD5YiMUZlKRpsHbagIzzjrnrXZ3mu6hoVlpOn6d5cZexhkllKBpAzgngtx+YrA1fxL4M1C6jOuaVe3V/bxpDI5dUB2gHdhZe5Oafq2qRazfLd28TQQJGkUUTEEgIMdRW8WpJW1VrkPt20JTLLPIZ53aWaTl5HOSfxrrPAH/Hu59Qf/QzXIL0X6V2HgAf6Gx/2f5sac/hYjsaKKKwAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDE8V/8gpv97+hrzSw/wCPNP8Aek/9DavSvFh/4lTD/a/oa80sf+PKP/ek/wDQ2ransBJJ0rl9fP72Ef7x/UV08pwKwNc0y7aWCTAVXXKbsrnOW43KAeKp7CZW8L3cFjrCz3UgigMcivI3Qcbh+JI4roIvGmlyX5hkgaK1bCrenBJI6b0AyF545P0rkpNLu0bZJ5SuOqNLGpGeRkMwPNJ/Zl2VyPKK+vnw49Mf6yuSrhqVSTlO92uXR2t5+pcKtSC5YrS99vwNHxciJrZliZXinjjkSRCCrAjGQRwelatsPlH0FcwNPuyFUNEcdB9ohOOe37z1rq4YZIUTzAAWHG1lbpjP3CcVvRjyQjC9+VJX72Jk+aTla13cvD7g+ldn4BH+gn/dH8zXGdI8+1dr4CGNPP8Aur/Wrn8IHW0UUVgAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGH4t/5BTfX+leZ2JzZR/7z/wDobV6V4u/5Bn4/0rzOwP8Aoa/70n/obVtDYCScgDmlu7/xHYS/ZrZYZoY7eEOXDHarG4gQDcPlP75iSvZR2zTZ8hc4zUd/BphuInTxCYnRfMwwXCu4RXBU8twzYyMcHpkmnIDP1PU9WGq3eqXFvC01y0Ug2uzIsuGiQoeM7ckFW6cVH9s1K01Ke3aJIjb77yaNnkZCZkWNtqqpY8yZwF4Oc8AmphY6c7yRr4jRAZkldpFUqzoVAlG09QhY4HBIxz1phht7nUUJ12A3EdvIsd1JBGsI2MojiT0LbyQxUEAGsZUacm243b0e41KS2e3oOe/1d4HdYra5BVDNcR74yEfM8eBtiGQWDMQDyRnmte6a7cRJeKqyRNIm5W3BmJV2wccgbhjn8qzo9MtFUCPxPBkRtGkSxghk2IgVhuxkp8uTyCvXpWlcRxwrDFFqC6imZHaRF2hXZvmP/A8A+gp06VOMrxik/K4OUmrNg3EJP+ya7fwGMad/wFf61xMgxC3+6f5V3PgYY03/AICn9a0n8IjqKKKKxAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDn/F+f7PX0yc/lXmmn/8eoH+3J/6Ga9K8X/8eC/U/wAq83s1Kxqp/vOf/Hia2hsBJdABAO9c1ql5qC3RVLqZVCqAokcAcdgDXR3LFpPbB/pXO6jbvLO7qeABx9BVMTM832o97uf/AL+v/jQb6/PBuZf++2/xqLIAwPvUBSakks2t3fyXMaC5lGTzhjXRW08r4WV2cqcDcSSB+NYGmx/6SHPRQa2kRt25T1NCGjWlP7o/7p/lXeeCRjTyPQL/ACNedkyudpGBtxmvRvBoxYv/AMB/rRP4WUdJRRRWIBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRQaACkzSZop2A57xgT9kjHbn+leefcx+Nei+Kp5oLeNoXKHnOOh+oPBrh31O4P+tit5f963iB/FkRT+tax2QGbK2TWXcsBIfcVuXF5HNE0f2O3jdukyCQMvuB5hX81p39r6HFuFxpCSNuBQ5zlQhVVY8Hh/mOOvfoKG3ppprd9g+ZxrRIAcdc1FsruF1LwXLAfO0oxT7EjIBcguQ2+UENgBTg+p6Ypkup+CBeEJo7vaAtlwzgsQqqhVTKMKTuJBOeQfaj5Ct5nM2YVB7nrWvABgGtNdX8JShGl0h/OAiXKkqq7I1RvlEg3fMCecFs8kGkuL6xnu454LNVt0iWP7O2VG5eN2UbJP1NC9AsMjwcV6D4Q/48pPqv9a4qK9gB+Swt1PqTK36NKR+ldz4WmaW1clUQDGFRQo/Qc/jRL4Rm9RSZpaxAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKQ0pppoQBRSc0nNMZz/i9WNpGwBKjIJFefOenPNeqarZwX0CwXMPnRZzt6EHsQQQa5+TwdoEvLm6gY9xK+Pw8wMK0i7IRwrVSuUyQa7yTwHo7n9xqtwh9GeFv02A1Um+H6gfJq8hHvAj/wAnFPmCxwzRDHSmCKuuk8DXCH5NUz9bQf8Ax6of+ENvc4/tJSP+vUf/AB2i4rHNxRncBitCPjFbkPga7cjdqmAT1W1HHvzLV9Ph/jBfWWI74t0X+cpo5h2MCIkGvQfCJzYue2RzWLH4K0yE5k1S4kcfwqYUB/AIx/Wur0q3S0sxbQhvLQ/KZCSxz1JJxSk7oC/Simc04VmwHUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKQilooAbiinYpMUwGNTeakIpuKYDTyMHkehphhhPWJD/wABH+FS4oxQBB9nt/8Anin/AHyP8KXyLf8A54p/3yP8KmxRtouBB9ntj/yxT/vkf4Uot7cdIUH0Uf4VNto20ANACjCgKPQcU5aXbSgUXAMUoFGKWpAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApMUtFACYoxS0UAJijFLRQAmKMUtFABiiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k="/>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  </hooper>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'

  export default {
    name: 'SingleProduct',
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    props: {
      product: {
        default() {
          return {
            id: 1,
            name: 'Product name Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque est non pariatur ',
            brand: 'Brand name',
            condition: 'New',
            sku: 'SKU: AT57H-87U',
            thumb: '',
            like: false
          }
        }
      }
    },
    data() {
      return {
        hooperSettings: {
          itemsToShow: 1,
          centerMode: true,
          infiniteScroll: true

        }
      }
    },
    methods: {
      toggleProductPaymentSidebar() {
        this.$emit('onShowPaymentSidebar')
      }
    }
  }
</script>

<style scoped lang="scss">
  .single-product-card {
    @apply mt-16 px-4;
    .headline {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 2;
      color: #000000;
      position: relative;
      @apply px-4;
    }

    @apply w-full flex items-center flex-col;
    .product-thumb {
      overflow: hidden;
      width: 360px;
      @apply my-6 flex justify-center p-3 object-cover object-center;
    }

    .product-meta {
      @apply font-sans;
      span {
        font-style: normal;
        line-height: 24px;
        color: #000000;

        &:not(:last-of-type):after {
          content: '|';
          width: 2px;
          @apply h-full mx-2
          }
      }
    }
  }

  .featured-thumb {
    min-height: 200px;
    @apply relative w-auto flex items-center w-full justify-center;

  }
</style>
