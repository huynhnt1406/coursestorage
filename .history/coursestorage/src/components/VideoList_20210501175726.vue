<template>
    <div class="videolist">
        <h1>Your Unfinished Courses</h1>
        <div class="videolist-items">
            <ListItems/>
            <ListItems/>
        </div>
    </div>
</template>

<script>
import ListItems from '../components/ListItems'
export default {
    components:{
        ListItems,
    }
}
</script>

<style>
.videolist{
    margin-left:8vh;
    margin-right: 8vh;
}
.videolist h1{
    color:white;
}
.videolist-items{
    display: flex;
}
</style>