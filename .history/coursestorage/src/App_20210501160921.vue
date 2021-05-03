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
.container{
  background-color:white;
  min-height: 100vh;
  display: flex;
}
</style>