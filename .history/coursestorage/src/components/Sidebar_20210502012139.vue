<template>
  <div class="sidebar">
      <div class="sidebar-header">
          <a-avatar shape="square" size="large" style="backgroundColor:#a29bfe ; marginRight:10px">E</a-avatar>
          <span><strong>Edu</strong>Era</span>
      </div>
      <div class="sidebar-links">
          <div class="link">
              <a-icon style="color:#a29bfe " type="appstore"/>
              <router-link class="sidebar-link" to="/"><span>Home</span></router-link>
          </div>
           <div class="link">
               <a-icon style="color:#a29bfe " type="bar-chart" />
               <router-link class="sidebar-link" to="/progress"><span>Progress</span></router-link>
          </div>
           <div class="link">
                <a-icon style="color:#a29bfe " type="message" />
                <router-link class="sidebar-link" to="/messages">
                
                <span>Messages</span></router-link>
          </div>
           <div class="link">
                <a-icon style="color:#a29bfe ; opacity:0.7" type="setting" />
                <router-link class="sidebar-link" to="/settings"><span>Settings</span></router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar{
    flex:0.2;
    background-color:#F5A028;
}
.sidebar-header{
    display: flex;
    align-items: center;
    padding:8vh 0 8vh 8vh
}
.sidebar-header span{
    color:#4b4196;
    font-size: large;
}
.sidebar-links{
    padding:8.5vh;
}
.link{
    display: flex;
    margin-bottom:5px;
    align-items: center;
    padding:10px 0 10px 0;
    color:#484848;
}
.sidebar-link{
    color:#484848;
    font-size: 18px;
}
.sidebar-link:focus{
    color:#d35400;
}
.link span{
    margin-left:10px;
}
.link:hover{
    color:#d35400;
    cursor: pointer;
}
</style>