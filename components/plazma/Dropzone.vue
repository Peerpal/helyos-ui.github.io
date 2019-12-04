<template>
  <div class="block w-screen ">
    <vue-dropzone :options="dropzoneOptions"
                  :include-styling="true"
                  v-on:vdropzone-thumbnail="thumbnail"
                  id="customdropzone" :useCustomSlot=true @vdropzone-complete="afterComplete">
      <div class="flex flex-col justify-center h-full absolute w-full">
        <div class="relative w-full px-6">
          <div class="flex justify-between items-center my-4">
            <div class="trance-text capitalize text-center font-bold">
              Drop Image Anywhere
            </div>
            <!--Help icon-->
            <div class="absolute right-0 -mt-32 mr-12">
              <!--Tootltip popup-->
              <tip-popup>

                <svg class="hicon" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="45" height="45">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#59D0FF"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <rect x="-70" y="-36" width="170" height="125" fill="#59D0FF"/>
                  </g>
                  <path
                    d="M20.328 25.432C20.328 24.568 20.52 23.856 20.904 23.296C21.304 22.72 21.88 22.096 22.632 21.424C23.208 20.912 23.632 20.472 23.904 20.104C24.192 19.72 24.336 19.288 24.336 18.808C24.336 18.136 24.064 17.592 23.52 17.176C22.976 16.76 22.248 16.552 21.336 16.552C19.608 16.552 18.304 17.168 17.424 18.4L15.096 16.888C15.784 15.944 16.672 15.224 17.76 14.728C18.848 14.216 20.128 13.96 21.6 13.96C23.392 13.96 24.816 14.352 25.872 15.136C26.944 15.904 27.48 16.968 27.48 18.328C27.48 18.984 27.368 19.56 27.144 20.056C26.936 20.552 26.68 20.976 26.376 21.328C26.072 21.664 25.672 22.056 25.176 22.504C24.568 23.048 24.112 23.528 23.808 23.944C23.52 24.36 23.376 24.856 23.376 25.432H20.328ZM21.864 31.168C21.304 31.168 20.84 30.992 20.472 30.64C20.12 30.272 19.944 29.824 19.944 29.296C19.944 28.768 20.12 28.328 20.472 27.976C20.84 27.624 21.304 27.448 21.864 27.448C22.408 27.448 22.856 27.624 23.208 27.976C23.576 28.328 23.76 28.768 23.76 29.296C23.76 29.824 23.576 30.272 23.208 30.64C22.856 30.992 22.408 31.168 21.864 31.168Z"
                    fill="white"/>
                </svg>

                <div slot="content">
                  <div class="helptip ">
                    <div class="flex items-center m-2">
                      <span v-html="screen.icon"></span>
                      <div class="headline-lg font-bold ml-3">{{screen.name}}</div>
                    </div>
                    <div class="p-2">
                      {{screen.tip || ''}}
                    </div>
                  </div>
                </div>
              </tip-popup>
            </div>
          </div>
          <div class="">
            <div class="uppercase trance-text">
              OR
            </div>
            <div class="btn btn-cyan boxed">Browse Files</div>
          </div>
        </div>
      </div>
    </vue-dropzone>
  </div>
</template>

<script>
  const getTemplate = () => `
<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>`
  import vueDropzone from 'vue2-dropzone'

  export default {
    name: 'Dropzone',
    components: {
      'vue-dropzone': vueDropzone
    },
    props: {
      screen: {
        default: null,
        type: Object,
        required: true
      }
    },
    data() {
      return {
        dropzoneOptions: {
          maxFilesize: 6, // MB
          maxFiles: 1,
          chunking: true,
          chunkSize: 500, // Bytes
          thumbnailWidth: 150, // px
          thumbnailHeight: 150,
          addRemoveLinks: true,
          url: '/',
          previewTemplate: getTemplate()
        }
      }
    },
    methods: {
      thumbnail(file, dataUrl) {
        var j, len, ref, thumbnailElement
        if (file.previewElement) {
          file.previewElement.classList.remove('dz-file-preview')
          ref = file.previewElement.querySelectorAll('[data-dz-thumbnail-bg]')
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j]
            thumbnailElement.alt = file.name
            thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")'
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add('dz-image-preview')
            }
          })(this)), 1)
        }
      },
      afterComplete(response) {
        console.log(response)
        this.$emit('onUpload', { screen: this.screen, file: response })
      }
    }
  }
</script>

<style lang="scss">

</style>
