<template>
    <div class="video-detail">
        <div class="video-actions">
            <div class="video-left">
                <iframe height="370px" width="100%" :src="videodata.videoLink" frameborder="0"></iframe>
                <div class="video-stats">
                    <div class="stats-left">
                        <img :src="videodata.avatarUrl" alt="videodata.name">
                        <span>{{videodata.channelName}}</span>
                    </div>
                    <div class="stats-rights">
                        <div class="button">
                            <a-icon style="margin-right:5px ; color:white; font-weight:bold" type="like" />
                            <span>{{videodata.numLike}}</span>
                        </div>
                        <div class="button">
                            <a-icon style="margin-right:5px ; color:white; font-weight:bold" type="dislike" />
                            <span>{{videodata.numDislike}}</span>
                        </div>
                        <div style="margin-right:5px ; color:white; font-weight:bold" class="button">
                            <a-icon type="share-alt" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-right">
                <h3>Comments</h3>
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
                channelName:''
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
}
.video-detail{
    margin-left: 8vh;
    margin-right: 8vh;
}
.stats-left img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.stats-left{
    display: flex;
    align-items: center;
}
.stats-rights{
    display: flex;
    align-items: center;
}
.video-stats{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:2vh;
    padding-bottom: 2vh;
    border-bottom: 2px solid white;
}
.button{
    margin-left:3vh;
}
.video-left iframe {
    border-radius: 40px;
}
.stats-left span{
    font-weight: 700;
    color:white;
    font-size: 16px;
    margin-left:10px;
}
.button span{
    font-weight: 500;
    color:white;
    font-size: 15px;

}
.video-subtitle h3{
    margin-top: 2vh;
    color:white;
}
.video-right{
    background-color: white;
    height: 370px;
    flex:0.3;
    margin-left:10px
}
</style>