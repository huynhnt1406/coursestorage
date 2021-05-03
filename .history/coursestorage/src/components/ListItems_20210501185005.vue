<template>
  <div class="listitems" >
      <div class="items">
          <img :src="thumnailUrl" alt="">
            <div class="info">
                <div class="timestamp">
                  {{time}} Min
                </div>
                <div class="info-teachcher">
                    <img :src="avatarUrl" alt="">
                    <span>{{channelName}}</span>
                </div>
                <div class="course-title">
                    <h3>{{name}}</h3>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ListItems',
    props:{
        thumnailUrl:String,
        time:String,
        avatarUrl:String,
        channelName:String,
        name:String,
    }
}
</script>

<style>
.listitems img{
    height: 225px;
    width:430px;
    margin: 10px;
    opacity: 0.8;
    border-radius: 40px;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
}
.items{
    position: relative;
}
.timestamp{
    position: absolute;
    top:20px;
    right:20px;
    background-color: #fc6806d7;
    padding:5px;
    color:white;
    font-weight: bold;
    font-size: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
}
.info-teachcher img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
}
.info-teachcher {
    display: flex;
    align-items: center;
    position: absolute;
    top:10px;
    left:10px;
}
.info-teachcher span{
    font-size: 20px;
    font-weight: bold;
    color:white;
}
.course-title{
    position: absolute;
    bottom:10px;
    height: 40px;
    margin-bottom: 10px;
    width: fit-content;
    left:40px;
    background-color: white;
    opacity: 0.5;
    padding:10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>