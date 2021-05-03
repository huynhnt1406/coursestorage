<template>
  <div class="sidebar">
      <div class="sidebar-header">
          <a-avatar shape="square" size="large" style="backgroundColor:#2C2C2C ; marginRight:10px">E</a-avatar>
          <span><strong>Courses</strong>Manager</span>
      </div>
      <div class="sidebar-links">
          <div class="link">
              <a-icon style="color:#484848 " type="appstore"/>
              <router-link class="sidebar-link" to="/"><span>Home</span></router-link>
          </div>
           <div class="link">
               <a-icon style="color:#484848 " type="bar-chart" />
               <router-link class="sidebar-link" to="/progress"><span>Progress</span></router-link>
          </div>
           <div class="link">
                <a-icon style="color:#484848 " type="message" />
                <router-link class="sidebar-link" to="/messages">
                
                <span>Messages</span></router-link>
          </div>
           <div class="link">
                <a-icon style="color:#484848 ; opacity:0.7" type="setting" />
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
    justify-content: center;
    padding-top:8vh;
    padding-left:5vh;
}
.sidebar-header span{
    color:BLACK;
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
    color:BLACK;
}
.sidebar-link{
    color:BLACK;
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