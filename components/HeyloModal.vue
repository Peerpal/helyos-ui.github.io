<template>
  <transition name="fade">
    <div @keyup.esc="escapeKeyListener" class="modal" v-if="state">
      <slot name="close-modal">
        <div @click="modalClose" class="close">&times;</div>
      </slot>
      <div class="content-layout">
        <slot v-bind="slotProps"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
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
      state() {
        return this.open
      },
      slotProps() {
        return { open: this.open }
      }
    },
    methods: {
      toggleState() {
        !this.open ? this.modalOpen() : this.modalClose()
      },
      modalOpen() {
        this.open = true
        $('body').addClass('overflow-hidden')
        this.$emit('onModalOpen')
      },
      modalClose() {
        this.open = false
        this.$emit('onModalClose')
        $('body').removeClass('overflow-hidden')
      },
      escapeKeyListener(evt) {
        if (evt.keyCode === 27) {
          if (this.open) {
            this.modalClose()
          }
        }
      }
    },
    mounted() {
      // console.log('Component mounted.')
    }
  }
</script>

<style lang="scss" scoped>

  $bg: rgba(229, 229, 229, 0.95);

  .modal {
    background-color: $bg;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: center;
    /*border: 2px solid $primary;*/
    display: flex;
    z-index: 5000;


    .content-layout {
      background: transparent;
      padding: 0;
      display: block;
      position: relative;
      object-fit: fill;
      object-position: center;
      height: 100vh;
      width: 100vw;
      overflow: auto;
      top: 0;
      @media(max-width: 768px) {
        padding: 0;
      }
    }
  }
</style>
