<template>
  <div class="heylo-popup" :class="classes" :style="setting.style">
    <slot v-bind="slotProps">Text here</slot>
    <transition name="fade" v-if="open">
      <slot name="popup-content" v-bind="slotProps">Popup dummy content</slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'HeyloPopup',
    props: {
      setting: {
        required: false,
        default() {
          return {
            style: {}
          }
        }
      }
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      slotProps() {
        return {
          pain: 'part',
          pop: this.togglePopup
        }
      },
      classes() {
        return {
          'show': this.open
        }
      }
    },
    methods: {
      togglePopup() {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped lang="scss">
  /* Popup container */
  .heylo-popup {
    text-align: inherit;
    @apply flex justify-end relative;
    .popup-content {
      visibility: hidden;
      background-color: transparent;
      position: absolute;
      width: auto;
      border: none;
      margin: 0;
      left: 0;
      top: 120%;
      /*&::after {
        content: "";
        position: absolute;
        top: 0%;
        left: 50%;
        margin-left: -5px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #555 transparent;
      }*/
    }

    &.show {
      .popup-content {
        visibility: visible;
        -webkit-animation: fadeIn 1s ease-in-out;
        animation: fadeIn .35s ease-in-out;
        z-index: 10;
      }
    }
  }


  /* Add animation (fade in the popup) */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
