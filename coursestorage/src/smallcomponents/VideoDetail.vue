<template>
    <div class="video-detail">
        <div class="video-actions">
            <div class="video-left">
                <iframe height="90%" width="100%" :src="videodata.videoLink" frameborder="0"></iframe>
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
                <h2>Comments</h2>
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
    margin-top: 4vh;
    color:white;
}
.video-right{
    height: 600px;
    flex:0.3;
    margin-left:10px;
    border-radius: 40px;
    box-shadow: 0 2px 2px rgba(0,0,0,.5);
    background-color: black;
}
.video-right h2{
    padding:5px 15px 5px 15px;
    border-bottom: 1px solid #F5A028;
    margin:5px;
    color:#F5A028;
    font-weight: 400;
    letter-spacing: 2px;
}
</style>