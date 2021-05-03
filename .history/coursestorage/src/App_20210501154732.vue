<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  components:{
    Sidebar
  }
}
</script>

<style>
*{
  margin:0
}
body{
  background-color: rebeccapurple;
  min-height: 100vh;
}
</style>