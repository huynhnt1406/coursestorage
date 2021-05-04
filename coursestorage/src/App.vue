<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="main">
      <SearchBar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
export default {
  components:{
    Sidebar,
    SearchBar,
  }
}
</script>

<style>
*{
  margin:0
}
.container{
  background-color:#2C2C2C;
  height: 100vh;
  display: flex;
}
.sidebar{
  height: 100vh;
}
.main{
  overflow-y: scroll;
  height: 90vh;
  flex:0.8;
  margin:5vh;
  background-color:#484848;
  border-radius: 50px;
  padding:5vh;
}
.main::-webkit-scrollbar {
  display: none;
}
</style>