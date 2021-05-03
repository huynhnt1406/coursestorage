<template>
  <div class="searchbar">
    <div class="search-tool">
        <a-icon type="search" />
        <input type="text" >
    </div>
    <div class="icons">
        <a-avatar shape="square" icon="user" type="user" size="45px" style="color:black ;backgroundColor:white; border-radius:7px "  />
        <a-avatar shape="square" size="45px" style="backgroundColor:#d35400 ;border-radius:7px " icon="fire" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.searchbar{
    padding:8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex:1;
}
.search-tool {
    background-color: gray;
    padding:8px;
    flex:0.8;
    border-radius: 20px;
}
.search-tool input{
    width: 90%;
    background-color: transparent;
    border:none;
}
</style>