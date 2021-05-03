<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="main">
      <SearchBar/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
export default {
  components:{
    Sidebar,
    SearchBar
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
.main{
  flex:0.8;
}
</style>