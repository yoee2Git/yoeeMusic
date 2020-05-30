<template>
  <div id="app">
    <topbar/>
    <home/>
  </div>
</template>

<script>
import topbar from '@/components/communal/topbar/Index.vue'

import Home from '@/views/Home.vue'
export default {
  components:{
    topbar,
    Home
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/reset.css'
</style>
