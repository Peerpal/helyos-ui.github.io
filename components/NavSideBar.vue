<template>
  <transition name="slide-fron-left">
    <nav class="sidebar" @keyup.esc="escapeKeyListener" :class="{open:isOpen}" role="navigation">
      <div class="mx-auto container">
        <div class="nav-sidebar">
          <div class="block relative">
            <div class="close top-0 mt-1" @click.stop="sidebarClose">&times;</div>
            <div class="relative">
              <div class="menu-headline">
                Menu
              </div>
            </div>
            <div class="menu">
              <div class="menu-item">Home</div>
              <div class="menu-item featured">Featured</div>
              <div class="menu-item">Your Account</div>
              <div class="menu-item">Plazma</div>
              <div class="menu-item">Delphi</div>
              <div class="menu-item">Associate Hub</div>
              <div class="menu-item">Orders</div>
              <div class="menu-item">Likes</div>
              <div class="menu-item featured">Exclusive Access</div>
              <div class="menu-item">Become a seller</div>
              <div class="menu-item">Become an affiliate</div>
              <div class="menu-item featured">Support</div>
              <div class="menu-item">Contact Us</div>
              <div class="menu-item">Alerts</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
  export default {
    name: 'sideNavbar',
    created() {
      document.addEventListener('keyup',
        this.escapeKeyListener)
    },
    destroyed() {
      document.removeEventListener('keyup',
        this.escapeKeyListener)
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      isOpen() {
        return this.open
      }
    },
    methods: {
      escapeKeyListener(evt) {
        if (evt.keyCode === 27) {
          if (this.open) {
            this.toggleOpen()
          }
        }
      },
      sidebarOpen() {
        this.open = true
        this.$emit('onSidebarOpen')
      },
      sidebarClose() {
        this.open = false
        this.$emit('onSidebarClose')
      },
      toggleOpen() {
        !this.open ? this.sidebarOpen() : this.sidebarClose()
      }
    }
  }
</script>

<style scoped lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: 100;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    height: 100vh;
    width: 271px;
    background: #FFFFFF;
    display: block;
    transition: all .35s ease-in-out;
    opacity: 0;

    &.open {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .nav-sidebar {
    .menu-headline {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      @apply p-4 flex items-center justify-center text-h-300 border-b border-gray-200;
    }

    .menu {
      position: relative;
      overflow-x: scroll;
      display: block;
      height: 100%;
      width: 100%;

      .menu-item {
        padding: 12px 12px 12px 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        text-transform: capitalize;
        @apply font-sans;
        &.featured {
          background: #F8F8F8;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          @apply text-h-300;

        }
      }
    }
  }
</style>
