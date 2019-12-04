<template>
  <div>
    <navbar/>
    <component :is="dynamicComponent"/>
  </div>
</template>

<script>
  import PlazmaScreen from '../../components/plazma/PlazmaScreen'

  export default {
    name: 'index',
    layout: 'clear',
    data() {
      return {
        index: 0,
        components: [
          'plazma-screen'
        ]
      }
    },
    components: {
      'plazma-screen': PlazmaScreen
    },
    computed: {
      dynamicComponent() {
        return this.components[this.index]
      }
    }
  }
</script>
