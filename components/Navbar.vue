<template>
  <div>
    <navbar-top @onToggleSidebar="toggleSideBar"/>
    <navbar-side ref="sidebar"/>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      toggleSideBar() {
        this.$refs['sidebar'].toggleOpen()
      }
    }
  }
</script>

<style scoped>

</style>
