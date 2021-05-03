<template>
    <div class="videolist">
        <h1>Your Unfinished Courses</h1>
        <div class="videos">
            <div v-for="video in allVideos" :key="video.id" class="videolist-items">
                <ListItems :thumnailUrl ="video.thumnailUrl" :time="video.minutes" :avatarUrl="video.avatarUrl" :channelName="video.channelName" :name="video.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ListItems from '../components/ListItems'
export default {
    components:{
        ListItems,
    },
    computed: mapGetters(["allVideos"]),
}
</script>

<style>
.videolist{
    margin-left:8vh;
    margin-right: 8vh;
    overflow-y: hidden;
}
.videolist h1{
    color:white;
}
.videolist-items{
    width: 420px;
}
</style>