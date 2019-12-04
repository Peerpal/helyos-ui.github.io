<template>
  <nav class="bg-white border-b" role="navigation">
    <div class="mx-auto container">
      <div class="nav-topbar ">
        <div class="bg-white block flex-no-wrap flex-shrink-0 p-1">
          <div class="navbar-brand  ">
            <nuxt-link to="/">
              <logo/>
            </nuxt-link>
          </div>
          <div class="pl-2 mr-2 block">
            <div class="hamburger-menu" @click.stop="toggleSideBar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!--Navbar search-->
        <div class="block mx-auto relative w-full">
          <navbar-search/>
        </div>
        <!--Navbar links-->
        <div class="bg-white block flex-no-wrap flex-shrink-0 p-2">
          <div class="navbar-link " id="wide-menu">
            <div class="navbar-link-item relative wide-screen ">
              <heylo-popup :setting="heyloPopupSetting">
                <template slot-scope="props">
                  <img src="~assets/svg/bell.svg" class="hicon" alt="">
                  <span class="badge cyan">4</span>
                  <span class="text cursor-pointer" @click.prevent.stop="props.pop">Alerts</span>
                </template>
                <template slot="popup-content" slot-scope="props">
                  <div class="absolute z-10 overflow-hidden bg-white rounded shadow  top-0 mt-12 alert-notice">
                    <!--  <span class="absolute top-0 mr-4 mt-1 text-2xl right-0 cursor-pointer"
                            @click="props.pop()">&times;</span>-->
                    <div class="px-6 my-4 text-center block">
                      <div class="font-bold text-sm py-4 block">Alert Notification</div>
                      <div class="">
                        <div
                          class="flex justify-between py-2 text-left items-center hover:bg-gray-100 border-t border-gray-200"
                          v-for="i in 3">
                          <a href="#" class="my-2 mr-4 ellipsis">Alert notification</a>
                          <span class="text-red-500 cursor-pointer px-2 ">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM5 11V9H15V11H5Z"
                                  fill="#FD0D1B"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </heylo-popup>
            </div>
            <div class="navbar-link-item ">
              <div class="flex flex-col items-center relative">
                <img src="~assets/svg/bag.svg" class="hicon" alt="">
                <div class="cursor-pointer mt-1">
                  <span class="badge blue">2</span>
                  <span class="text">The Bag</span>
                </div>
              </div>
            </div>
            <div class="navbar-link-item wide-screen ">
              <img src="~assets/svg/account.svg" class="hicon" alt="">
              <!--Account drop down-->
              <template>
                <t-dropdown placement="bottom" size="sm"
                            :button-props="{ baseClass: 'flex rounded-full w-full h-full p-0 leading-none hover:bg-white text-sm mt-1' }"
                            dropdown-class="right-0 z-10 absolute w-40 bg-white rounded-sm border shadow-md overflow-hidden"
                            :visible-arrow="false" :prevent-default="true">
                  <template v-slot:button-content>
                    <span class="text text-xs p-0 m-0">Account</span>
                  </template>

                  <template v-if="loggedIn">
                    <ul>
                      <li>
                        <a href="" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Your Account</a>
                      </li>
                      <li>
                        <a href="" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Plazma</a>
                      </li>
                      <li>
                        <a href="" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Delphi</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Associates Hub</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Orders</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Likes</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Become a Seller</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Become an
                          Affiliate</a>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <ul>
                      <li>
                        <div class="p-2">
                          <div class="w-full mb-1">
                            <nuxt-link class="btn btn-blue block text-center" :to="{name: 'sign-in'}">Sign in
                            </nuxt-link>
                          </div>
                          <p class="text-center  my-2">
                            New Customer?
                            <nuxt-link :to="{name: 'sign-up'}" class="nowrap-text text-blue-500">Start here</nuxt-link>
                          </p>
                          <hr>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Become a Seller</a>
                      </li>
                      <li>
                        <a href="#" class="nowrap-text block no-underline px-4 py-2 hover:bg-h-100">Become an
                          Affiliate</a>
                      </li>
                    </ul>
                  </template>
                </t-dropdown>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
  export default {
    name: 'TopNavbar',
    data() {
      return {
        loggedIn: false,
        heyloPopupSetting: {
          style: {
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'position': 'relative'
          }
        }
      }
    },
    methods: {
      toggleSideBar() {
        this.$emit('onToggleSidebar')
      }
    }
  }
</script>

<style scoped lang="scss">

  .nav-topbar {
    @apply flex justify-around items-center flex-no-wrap font-sans py-4;
    .navbar-link {
      @apply flex items-center mx-2  h-full w-full flex-1 flex-no-wrap justify-center;
      .navbar-link-item {
        @apply flex flex-col text-xs items-center w-auto flex-1;
        span.text {
          @apply py-1 px-2 mt-1 ;
        }
      }
    }

    /*Badges*/
    .badge {
      font-size: 9px;
      line-height: .5;
      @apply absolute top-0 -mt-2 p-1 right-0 mr-4 rounded-full;
    }

    /*Screen styling*/
    @media (min-width: 768px) {
      .navbar-brand {
        @apply flex-initial items-center flex-shrink-0 text-white mx-2;
      }
      .navbar-link {
        .navbar-link-item {
          span.text {
            &:hover {
              @apply bg-gray-100 border-gray-500 rounded-full
              }
          }
        }
      }
    }
    @media all and (max-width: 768px) {
      /*Hamburger menu toggler*/
      .hamburger-menu {
        display: block;
        position: relative;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
        width: 25px;
        @apply bg-white;
        cursor: pointer;

        span {
          display: block;
          width: 100%;
          height: 4px;
          margin-top: 4px;
          margin-bottom: 4px;
          position: relative;
          background: black;
          border-radius: 3px;
          z-index: 1;
          transform-origin: 4px 0px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
          opacity 0.55s ease;
          @apply mx-auto;
          &:first-child {
            transform-origin: 0% 0%;
          }

          &:nth-last-child(2) {
            transform-origin: 0% 100%;
          }
        }
      }
      /*Brand*/
      .navbar-brand {
        @apply hidden;
      }
      /*Links*/
      .navbar-link {
        .navbar-link-item {
          &.wide-screen {
            display: none;
          }

          span.text {
            @apply hidden;
            &:hover {
            }
          }
        }
      }
    }
  }

  .alert-notice {
    max-width: 200px;

    background: #FFFFFF;

  }
</style>
