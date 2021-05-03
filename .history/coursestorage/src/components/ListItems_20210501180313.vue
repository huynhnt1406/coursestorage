<template>
  <div class="listitem" >
      <div class="items">
          <img src="https://i.ytimg.com/vi/MT-GJQIY3EU/maxresdefault.jpg" alt="">
            <div class="info">
                <div class="timestamp">
                  82 Min
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
    top:10px;
    right:30px;
}
</style>