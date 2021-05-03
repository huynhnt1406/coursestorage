<template>
  <div class="sidebar">
      <div class="sidebar-header">
          <a-avatar shape="square" size="large" style="backgroundColor:#a29bfe ; opacity:0.7 ; marginRight:10px">E</a-avatar>
          <h3>EduEra</h3>
      </div>
      <div class="sidebar-links">
          <div class="link">
              <a-icon type="appstore"/>
              <span>Home</span>
          </div>
           <div class="link">
               <a-icon type="bar-chart" />
              <span>Progress</span>
          </div>
           <div class="link">
               <a-icon type="message" />
                <span>Messages</span>
          </div>
           <div class="link">
                <a-icon type="setting" />
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
    background-color:#6c5ce7;
}
.sidebar-header{
    display: flex;
    align-items: center;
    padding:5vh;
    justify-content: center;
}
.sidebar-header h3{
    color:white;
    letter-spacing: 5px;
}
.sidebar-links{
    padding:8vh;
}
.link{
    display: flex;
    margin-bottom:5px;
    align-items: center;
    padding:10px 0 10px 0;
}
.link span{
    margin-left:10px;
    color:white;
}
.link a-icon{
    color:#a29bfe;
    opacity:0.7
}
</style>