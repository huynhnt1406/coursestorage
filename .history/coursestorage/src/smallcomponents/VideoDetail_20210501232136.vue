<template>
    <div class="video-detail">
        <div class="video-actions">
            <div class="video-left">
                <iframe :src="videodata.videoLink" frameborder="0"></iframe>
            </div>
            <div class="video-right">
                <h3>tabs</h3>
            </div>
        </div>
        <div class="video-subtitle">
            <h3>{{videodata.name}}</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        id:Number
    },
    data(){
        return{
            videodata:{
                id:'',
                name:'',
                numLike:'',
                numDislike:'',
                avatarUrl:'',
                videoLink:'',
            }
        }
    },
    created(){
        axios.get(`http://localhost:3000/videolists/${this.id}`)
            .then(res => this.videodata = res.data)
    }
}
</script>

<style>
.video-actions{
    display: flex;
}
.video-left{
    flex:0.7;
    background-color: white;
}
.video-detail{
    margin-left: 5vh;
}
</style>