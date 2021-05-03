<template>
  <div class="sidebar">
      <div class="sidebar-header">
          <a-avatar shape="square" size="large" style="backgroundColor:#a29bfe ; opacity:0.7 ; marginRight:10px">E</a-avatar>
          <span><strong>Edu</strong>Era</span>
      </div>
      <div class="sidebar-links">
          <div class="link">
              <a-icon style="color:#a29bfe ; opacity:0.7" type="appstore"/>
              <span>Home</span>
          </div>
           <div class="link">
               <a-icon style="color:#a29bfe ; opacity:0.7" type="bar-chart" />
              <span>Progress</span>
          </div>
           <div class="link">
               <a-icon style="color:#a29bfe ; opacity:0.7" type="message" />
                <span>Messages</span>
          </div>
           <div class="link">
                <a-icon style="color:#a29bfe ; opacity:0.7" type="setting" />
              <span>Settings</span>
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
    background-color:#4b4196;
}
.sidebar-header{
    display: flex;
    align-items: center;
    padding:8vh 0 8vh 8vh
}
.sidebar-header span{
    color:white;
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
    color:white;
}
.link span{
    margin-left:10px;
}
.link:hover{
    color:#d35400;
    cursor: pointer;
}
</style>