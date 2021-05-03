<template>
  <div class="listitem" >
      <div class="items">
          <img src="https://i.ytimg.com/vi/MT-GJQIY3EU/maxresdefault.jpg" alt="">
            <div class="info">
                <div class="timestamp">
                  82 Min
                </div>
                <div class="info-teachcher">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s176-c-k-c0x00ffffff-no-rj" alt="">
                    <h3>Travesy Media</h3>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.listitem img{
    height: 225px;
    width:430px;
    margin: 10px;
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
</style>