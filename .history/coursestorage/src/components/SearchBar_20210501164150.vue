<template>
  <div class="searchbar">
    <div class="search-tool">
        <a-icon type="search" />
        <input type="text" >
    </div>
    <div class="icons">
        <a-avatar shape="square" icon="user" type="user" size="40px" style="color:black ;backgroundColor:white; border-radius:7px "  />
        <a-avatar shape="square" size="40px" style="backgroundColor:#d35400 ;border-radius:7px " icon="play-circle" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.searchbar{
    display: flex;
    justify-content: space-between
}
</style>