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
import VideoList from './components/VideoList'
export default {
  components:{
    Sidebar,
    SearchBar,
    VideoList
  }
}
</script>

<style>
*{
  margin:0
}
.container{
  background-color:#4b4196;
  min-height: 100vh;
  display: flex;
}
.main{
  flex:0.8;
}
</style>